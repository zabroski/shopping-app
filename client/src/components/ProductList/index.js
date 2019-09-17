import React from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/apiService'
import './ProductList.css';
import { Card, Button } from 'react-bootstrap';


class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            products:[]
        }
    }

    async componentDidMount() {
        await this.getProducts()

    }

    getProducts = async () => {
        const products = await getProducts()
        this.setState({ products: products })
    }

    handleAddToCart(productId){
        let products = JSON.parse(localStorage.getItem("products")) || {};

        if(products[productId]){
            products[productId]['qt'] +=  1;
        }else{
            products[productId] = {
                product: this.getProductById(productId),
                qt: 1
            };
        }
        
        localStorage.setItem("products", JSON.stringify(products));
    }

    getProductById(productId){
        for(let k in this.state.products){
            let product = this.state.products[k];
            if(product.id == productId){
                return product;
            }
        }
    }


    renderProduct = () => {
            return this.state.products.map(product => {
                return (
                  
                        <Card style={{ width: '15rem', float: "left", margin:"5px", color: "black" }} key={product.id}>
                              <Link to={{
                            pathname: `/dashboard/product/${product.id}`,
                            state: { products: product.products }
                        }}>
                            <Card.Img variant="top" src={product.image} />
                        </Link>
                            
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button variant="primary" onClick={() => {
                                    this.handleAddToCart(product.id);
                                }}>Add To Cart ({product.price}zc)</Button>
                            </Card.Body>
                        </Card>
                )
            })
    }


    render() {
        return (
            <div>
                {/* <h1>Shopping time</h1> */}
                <div className="product-list">
                    {this.renderProduct()}
                </div>

            </div>
        )
    }



}


export default ProductList