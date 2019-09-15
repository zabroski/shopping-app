import React from 'react';
import { getMyStoreProducts }  from '../../services/apiService'


class MyStore extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            myStoreProducts: [],
            updated: false
        }
    }

    async componentDidMount() {
        await this.getMyStoreProducts();
    }

    getMyStoreProducts = async() => {
        const myStoreProducts = await getMyStoreProducts()
        this.setState({ myStoreProducts:myStoreProducts })
    }


    // handleChange = (e) => {
    //     const currentElement = e.target
    //     const { name, value } = currentElement
    //     const newState = {};
    //     newState[name] = value
    //     this.setState(newState)
    // }

    // handleSubmit = async (e) => {
    //     e.preventDefault()
    //     const { name, type, price, description, image  }
    //     const product = { name, type, price, description, image  }
    //     const id = this.props.location.state.productId
    //     await updateProduct( id, product)
    //     this.setState({ updated: true })
    // }



    render() {
        return (
            <div>
                <h2>My Store</h2>
                {this.state.myStoreProducts.map((product, id) =>{
                    return(
                        <div className="myProduct" key={id}>
                            <h2>{product.name}-----</h2> 
                            <p>{product.description}</p>
                            <span>{product.price}</span>
                            <div>{product.image}</div> 

                            <div>
                                <button className="update-button" onClick={()=> this.props.history.push('/dashboard/product/:product_id/update', {id: id})}>Update</button>
                            </div>
                            <div>
                                <button className="delete-button" onClick={() => this.handleDelete(id)}>Delete</ button>
                            </div>
                        </div>
                    )
                })   
                }

            </div>
        )
    } 
}


export default MyStore