import React from 'react';
import { getMyStoreProducts, deleteProduct }  from '../../services/apiService';
import './MyStore.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';

class MyStore extends React.Component {
    constructor(props) {
        super()
        this.state = {
            data: [],
            myStoreProducts: [],
            updated: false
        }
    }

    async componentDidMount() {
        await this.getMyStoreProducts();
    }

    getMyStoreProducts = async() => {
        const myStoreProducts = await getMyStoreProducts()
        this.setState({ myStoreProducts:myStoreProducts })
    }

    handleDelete = async (id) => {
        await deleteProduct(id);
        await this.getMyStoreProducts();
    }

    render() {
        return (
            <div>
                {/* <h2>My Store</h2> */}
                {this.state.myStoreProducts.map((product, id) =>{
                    return(

                        <Card style={{ width: '15rem', float: "left", margin:"5"}} key={product.id} className="card">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>

                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary" onClick={()=> this.props.history.push('/product/'+product.id+'/edit')}>Update</Button> <br />
                                <Button variant="danger" onClick={() => this.handleDelete(product.id)}>Delete</Button>
                            </ButtonGroup>  
                        </Card.Body>
                    </Card>
                    )
                })   
                }

            </div>
        )
    } 
}


export default MyStore