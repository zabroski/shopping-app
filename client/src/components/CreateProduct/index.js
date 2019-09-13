import React from 'react'
import Axios from 'axios';
import { Redirect } from 'react-router-dom';
import { createProduct } from '../../services/apiService';


class CreateProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            created: false,
        }
    }

    handleChange = (e) => {
        const currentElement = e.target
        const { name, value } = currentElement
        const newState = {}
        newState[name] = value
        this.setState(newState)
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { name, type,price, description } = this.state 
        let newProduct = { name, type, price, description };

        let data = createProduct(newProduct)
        this.setState({ created: true})
    }

    render() {
        if (this.state.created){return <Redirect to="/dashbord"> </Redirect>}
        return (
            <div>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label for = "Name">Name</label>
                    <input name="Name" type="text"></input>

                    <label for = "type">Type</label>
                    <input name="Type" type="text"></input>

                    <label for = "price">Price</label>
                    <input name="price" type="number"></input>

                    <label for = "description">description</label>
                    <input name="description" type="text"></input>

                    <label for = "image">Image</label>
                    <input name="image" type="url"></input>
                    <div className="submit"><input type = "submit" /></div> 
                    
                </form>
            </div>
        )
    }
}


export default CreateProduct