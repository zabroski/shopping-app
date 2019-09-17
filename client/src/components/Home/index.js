import React from 'react'
import ProductList from '../ProductList';
import './Home.css';

function Home() {
    return( 
    <div>
        <h1>What's in store today? Check it out...</h1>
        <ProductList />
    </div>
    )
}


export default Home