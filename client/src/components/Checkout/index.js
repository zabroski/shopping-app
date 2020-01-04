import React from 'react'
import {Link} from "react-router-dom";
import { getProduct } from '../../services/apiService';
import './Checkout.css';
import { ListGroup } from 'react-bootstrap';
import { Table, Button } from 'react-bootstrap';
function Checkout (props) {

    let products = JSON.parse(localStorage.getItem("products")) || {};
    let total = 0;

    for(let k in products){
        // let productInfo = products[k];
        // total += productInfo.qt * productInfo.product.price;
    }

    return (
        
        <div className="checkout">

            <div className="unitQuaTotal">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                 {Object.keys(products).map((productId) => {
                        let productInfo = products[productId];
                        
                        return (<tr>
                                    <td>{productInfo.product.name}</td>
                                    <td>{productInfo.product.price}zc</td>
                                    <td>{productInfo.qt}</td>
                                    <td>{productInfo.qt * productInfo.product.price}zc</td>
                                </tr>);
                    })}

                    
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{total}zc</td>
                    </tr>
                </tbody>
                </Table>

                <div className="order">
                <Button style={{float: "right"}} variant="primary">Place your order</Button>
            {/* <Link to="/thankyou"></Link> */}
            </div>
            </div>
        </div>
    )
}

export default Checkout

