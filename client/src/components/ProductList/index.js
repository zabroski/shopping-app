import React from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { getProducts } from '../../services/apiService'


class ProductList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    async componentDidMount () {
        await this.getProduct()

    }

    getProduct = async () => {
        const data = await getProducts()
        this.setState({ data})
    }

    renderProduct = () => {
        if(this.state.data){
            return this.state.data.map(user =>{  
                return (
                    <li key={user.id}><Link to={{
                        pathname:`/dashboard/product/${user.id}`,
                        state:{products:user.products}
                }}>{user.name}</Link></li>
                )
            })
        }
    }
    

    render() {
        return(
            <div>
                <h1>Shopping time</h1>
                <div>
                    {this.renderProduct()}
                </div>
               
            </div>
        )
    }



}


export default ProductList