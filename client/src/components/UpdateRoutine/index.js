import React from 'react'
import { Redirect } from 'react-router-dom'
import { updateProduct }  from '../../services/apiService'



class UpdateProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            update: false
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
        const { name, type, price, description, image  }
        const product = { name, type, price, description, image  }
        const id = this.props.location.state.productId
        await updateProduct( id, product)
        this.setState({ updated: true })
    }



    render() {
        if (this.state.updated){return <Redirect to="/dashboard"></Redirect>}
        return(
            <div className="update-product">
                <h1>Update product</h1>
                    <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                        <label for = "Name">Name</label>
                        <input name="Name" type="text"></input>

                        <label for = "type">Type</label>
                        <input name="Type" type="text"></input>

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

UpdateProduct
