import React from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/apiService'
import './ProductList.css';



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


    renderProduct = () => {
            return this.state.products.map(product => {
                return (
                    <div className="product-item" key={product.id}>
                        <Link to={{
                            pathname: `/dashboard/product/${product.id}`,
                            state: { products: product.products }
                        }}>
                            <h2>{product.name}</h2> 
                            <p>{product.description}</p>
                            <span>{product.price}</span>
                            <div>{product.image}</div>
                        </Link>
                    </div>
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