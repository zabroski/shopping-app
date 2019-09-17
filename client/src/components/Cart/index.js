import React from 'react'
import { Link } from  "react-router-dom"
import { getProducts } from '../../services/apiService';

function Cart (props) {
    
    return(
        <div className="cart">
           <div>
                <Link to="/cart/checkout">Cart</Link>
            </div>

        </div>
    )
}

export default Cart