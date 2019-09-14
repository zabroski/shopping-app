import React from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/apiService'
import './ProductList.css'


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
                    <h2 key={product.id}><Link to={{
                        pathname: `/dashboard/product/${product.id}`,
                        state: { products: product.products }
                    }}>{product.name} 
                        {product.id} 
                        {product.description} 
                        {product.stype}
                        {product.price} 
                        {product.description}
                        {product.image}
                    </Link></h2>
                )
            })
    }


    render() {
        return (
            <div>
                {/* <h1>Shopping time</h1> */}
                <div className="people-list">
                    {this.renderProduct()}
                </div>

            </div>
        )
    }



}


export default ProductList