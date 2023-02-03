import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { getPurchasesthunk } from '../store/slices/purchases.slice';
import { addPurchasesthunk } from '../store/slices/cart.slice';

const Pruchases = () => {

    const purchases = useSelector(state => state.purchases);
    console.log(purchases);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPurchasesthunk())
    }, [])

    const [quantity, setQuantity] = useState("");

    const addToCart = () => {
        const purchase = {
            productId: products.id,
            quantity: quantity,
        }
        dispatch(addPurchasesthunk(purchase));
    };

    return (
        <div className='purchaseContainer'>
            <Container className="my-3">
                <h1>Purchases</h1>
                {/* <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} /> */}
                {/* <Button onClick={addToCart}> Add to cart</Button> */}
                <Link to={`/products/${purchases.product?.id}`} >
                    <ul style={{ListDecoration: "none", textDecoration: "unset", textDecorationStyle:"unset"}}>
                        {purchases.map(purchase => (
                            <li key={purchase.id} style={{ListDecoration: "none"}}>
                            <Container className='my-4'>

                                <Row style={{fontSize: 10, }}>
                                    <Col lg={1}><img src={purchase?.product?.images?.[1].url} style={{ width: 30 }} alt="" /></Col>
                                    <Col lg={3}>{purchase.product?.title}</Col>
                                    <Col lg={2} style={{ color: "grey" }} >{purchase.updatedAt.slice(0, 10)}</Col>
                                    <Col lg={2}>{purchase.quantity}</Col>
                                    <Col lg={2}> $ {Number(purchase?.product?.price) * purchase.quantity} </Col>
                                </Row>
                            </Container>
                            </li>

                        ))}
                    </ul>
                </Link>
            </Container>
        </div>
    );
};

export default Pruchases;