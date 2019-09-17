import React from 'react';
import { Redirect } from 'react-router-dom';
import { updateProduct }  from '../../services/apiService';
import './UpdateProduct.css'



class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            update: false,
            productId: props.match.params.id
        }
    }

    handleChange = (e) => {
        const currentElement = e.target
        const { name, value } = currentElement
        const newState = {};
        newState[name] = value
        this.setState(newState)
    }

    handleSubmit = async (e) => {

             e.preventDefault()
             const  { name, type, price, description, image  } = this.state
             const product = {  name, type, price, description, image  }
             console.log(this.props);
             const id = this.state.productId
             await updateProduct( id, product)
             this.setState({ updated: true })
    }



    render() {
        if (this.state.updated){return <Redirect to="/"></Redirect>}
        return(
            <div className="update-product">
                <h1>Update product</h1>
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <input name="name" type="text" placeholder="Name"></input>
                        <input name="type" type="text" placeholder="Type"></input>
                        <input name="price" type="number" placeholder="Price"></input>
                        <input name="description" type="text" placeholder="Description"></input>
                        <input name="image" type="url" placeholder="Image"></input>
                        <div className="submit"><input type = "submit" /></div>   
                    </form>
        </div>
        )
    }
}

export default UpdateProduct
