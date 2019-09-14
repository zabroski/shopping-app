import React from 'react';
import { Redirect } from 'react-router-dom';
import { createProduct } from '../../services/apiService';
// import ProductList from '../ProductList';


class CreateProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            created: false,
            name: ''
        }
    }

    handleChange = (e) => {
        const currentElement = e.target
        const { name, value } = currentElement
        const newState = {}
        newState[name] = value
        this.setState(newState);
        console.log(value);
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const { name, type, price, description, image  } = this.state 
        let newProduct = { name, type, price, description, image };

        let data = createProduct(newProduct)
        this.setState({ created: true})
    }

    render() {
        if (this.state.created){return <Redirect to="/"> </Redirect>}
        return (
            <div>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <label for = "name">Name</label>
                    <input name="name" type="text"></input>

                    <label for = "type">Type</label>
                    <input name="type" type="text"></input>

                    <label for = "price">Price</label>
                    <input name="price" type="number"></input>

                    <label for = "description">Description</label>
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