import React from 'react'
import ProductList from '../ProductList';
import { Link } from  "react-router-dom";

function Home() {
    return( 
    <div>
        <h1>What's in store today? Check it out...</h1>
        <ProductList />
    <div>
        <Link to="/checkout">Cart</Link>
    </div>
    </div>
    )
}


export default Home