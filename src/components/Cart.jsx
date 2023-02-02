import React, { useEffect } from 'react';
import { Button, Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartsThunk, purchaseCartThunk } from '../store/slices/cart.slice';

const Cart = ({show, handleClose}) => {

    const dispatch = useDispatch();

    const carts = useSelector(state => state.cart);
    console.log(carts);



    useEffect(()=>{
        dispatch(getCartsThunk())
    },[])

    return (
        <Offcanvas placement='end' show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Container className="my-3">
                <b>PRODUCTS SELECTED</b>
                <Offcanvas.Body> 
                    {carts.map(cart =>(
                        <li key={cart?.updatedAt}>
                        <Row> 
                            <Col> {cart?.product?.title}</Col>
                            <Col> <img src={cart?.product?.images[0].url} alt="" style={{maxWidth: 50, maxHeight: 50, minHeight: 48}}/> <br /></Col>
                            <Col> $ {cart?.product?.price}</Col>
                        </Row>
                        {/* {cart?.product.title} <br />
                        <img src={cart?.product.images[0].url} alt="" style={{maxWidth: 50, maxHeight: 50, minHeight: 48}}/> <br />
                        {cart?.product.price} */}
                        </li>
                    ))}
                </Offcanvas.Body>
            </Container> <hr />
            <Button onClick={() => dispatch(purchaseCartThunk())}> Check Out </Button>
        </Offcanvas>
    );
};

export default Cart;