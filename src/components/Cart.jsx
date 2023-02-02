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
                <Offcanvas.Title style={{color: "var(--primary)"}}> <b>PRODUCTS SELECTED</b> </Offcanvas.Title>
            </Offcanvas.Header>
            <Container className="my-3">
                
                <Offcanvas.Body> 
                    {carts.map(cart =>(
                        <div key={cart?.updatedAt}>
                        <Row style={{border: "1px solid var(--primary)"}}> 
                            <Col lg={6}> {cart?.product?.title}</Col>
                            <Col lg={2}> <img src={cart?.product?.images[0].url} alt="" style={{maxWidth: 50, maxHeight: 30, minHeight: 30}}/> <br /></Col>
                            <Col lg={4}> $ {cart?.product?.price}</Col>
                            <Col></Col>
                        </Row> <br /> 
                        {/* {cart?.product.title} <br />
                        <img src={cart?.product.images[0].url} alt="" style={{maxWidth: 50, maxHeight: 50, minHeight: 48}}/> <br />
                        {cart?.product.price} */}
                        </div>
                    ))}
                </Offcanvas.Body>
            </Container> <hr />
            <Button onClick={() => dispatch(purchaseCartThunk())}> Check Out </Button>
        </Offcanvas>
    );
};

export default Cart;