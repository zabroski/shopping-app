import React from 'react'
import {Link} from "react-router-dom";


function Checkout (props) {
    return (

        
        
        <div className="checkout">
            <div>
                <h1>Unit</h1>
                <h1>Quantity</h1>
                <h1>Total</h1>
            </div>
            <div>
            <Link to="/thankyou">Pay</Link>
            </div>
            
        </div>
    )
}

export default Checkout

