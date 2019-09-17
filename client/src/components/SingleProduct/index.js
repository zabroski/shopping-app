import React from 'react';
import { delectProduct } from '../../services/apiService'
import { Redirect } from 'react-router-dom'

const SingleProduct = (props) => {
    handleDelecte = async (id) => {
        await delectProduct(id)
        await props.history.push(`/dasgboard`)
    }

const renderProducts = () => {
    if(props.location.state) {
        return props.location.state.products.map(product => {
            return (
                <div className="single-routine">
                <div key={product.id}>{product.name}{product.description}{product.price}{product.image} 
                </div>
                <div>
                    <button className="update-button" onClick={()=> props.history.push('/dashboard/product/:product_id/update', {productId: product.id})}>Update</button>
                </div>
                <br />
                <div>
                    <button className="delete-button" onClick={() => handleDelete(product.id)}>Delete</ button>
                </div>
                </div>

                )
            })
        }
    }

    return (
        <div>
            {renderProducts()}
        </div>
    )
}

export default SingleProduct