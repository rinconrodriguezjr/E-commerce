import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
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
        <div>
            <h1>Purchases</h1>
            <input type="text" value={quantity} onChange={e => setQuantity(e.target.value)} />
            <Button onClick={addToCart}> Add to cart</Button>
            <Link to={`/products/${purchases.product?.id}`} >
                <ul>
                    {purchases.map(purchase => (
                        <li key={purchase.id}>
                            <Row>
                                <Col><img src={purchase?.product?.images?.[1].url} style={{ width: 100 }} alt="" /></Col>
                                <Col>{purchase.product?.title}</Col>
                            </Row>
                        </li>

                    ))}
                </ul>
            </Link>
        </div>
    );
};

export default Pruchases;