import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Offcanvas, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCartsThunk, purchaseCartThunk } from '../store/slices/cart.slice';
import QuantityProductsCart from './QuantityProductsCart';

const Cart = ({ show, handleClose }) => {


    const carts = useSelector(state => state.cart);
    const dispatch = useDispatch();
    // console.log(carts);
    useEffect(() => {
        dispatch(getCartsThunk())
    }, [])

    let total = 0;
    carts.forEach(product => {
        // console.log(product);
        const productTotal = Number(product.product.price) * product.quantity
        total += productTotal
    })

    // const [quantity, setQuantity] = useState(1);

    // const addToCart = () => {
    //     const purchase = {
    //         productId: products.id,
    //         quantity: quantity,
    //     }
    //     dispatch(addPurchasesthunk(purchase));
    // }


    // const up = () => {
    //     setQuantity(quantity + 1);
    // }

    // const down = () => {
    //     if (quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // }

    // const productTotal = cart.product.price ** quantity

    return (
        <Offcanvas placement='end' show={show} onHide={handleClose} name="end">
            <Offcanvas.Header closeButton
            // style={{width:"100%"}}
            >
                <Offcanvas.Title style={{ color: "var(--primary)", width: "100%" }}> <b>Shopping Cart</b> </Offcanvas.Title>
            </Offcanvas.Header>

            <Container className="my-3">

                <Offcanvas.Body>
                    <ul>
                        {carts.map(cart => (
                            <QuantityProductsCart cart={cart} handleClose={handleClose} key={cart.id} />))}
                    </ul>
                </Offcanvas.Body>

                <div className='check'>
                    <div className='total_check'>
                        <span className='label_check'>Total:</span>
                        <b style={{ fontSize: '1.3rem' }}>$ {total}</b>
                    </div>
                    <button className='btn_check' onClick={() => dispatch(purchaseCartThunk())}>Purcharse</button>
                </div>
                {/* <div key={cart?.updatedAt}>
                            <Row style={{ border: "none", width: "100%", fontSize: 10 }}>
                                <Col lg={2}> <img src={cart?.product?.images[0].url} alt="" style={{ maxWidth: 50, maxHeight: 30, minHeight: 30 }} /> <br /></Col>
                                <Col lg={3}> {cart?.product?.title.slice(0,20)}</Col>
                                <Col lg={2}>  */}
                {/* $ {Number(cart?.product?.price) * quantity}  */}
                {/* </Col>
                                <Col lg={2}>
                                    <div className='quantityCart' style={{textAling: "center" }}> */}
                {/* <button onClick={}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAT5JREFUSEvtlOExBEEQhb+LgAwQASJABMjgMkAEiAAhiAARIAInAmRABuq76tm6uhuzvar2hyr9Z2t3e97rfv16Jowck5Hx+SfoVXhRohmw3XsilyDWrqljEbwCO8sEfniJAg+Ap1yxXdY+8BhvVm8XKy66AM6B92jxM0myHsVtApeAOPOo2bTM4h44ThKYewg8A3bSRY3AKiRZCwIPt+IIuAO+Qne7bxL48xS4ApRoK541EqV5A3yeAdfLSa1Ndsh7MWyHXouS8wDYyUq0CKzKdpWqVl3pUmmUtWqIvruo6OthrVf0FVBLW4RG+HFOfQS2XBzSbWeYwK2/BaYtB2QIrFLwjfC4eO7KR7imuSsZAgEXt7QUnNr2LIGgWvAk0G/Cyr17OIRAqcr9NL/IMjGEIIM3aA9+BThkk/8GwTcJ2TYZqCLviwAAAABJRU5ErkJggg==" /></button>
                                        <article style={{textAling: "center" }}>{}</article>
                                        <button onClick={}> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAS9JREFUSEvtlMFRAkEQRR8RaAZqBGoESgRKJGgESgRqJGAEagRKBGgGmoH1rJ6tBWZ3hiooD9qXPcxM//6vu3fAjmOw4/z8LYF94CmQDoHPGrybILoHxpH0AbjapsB5q/qUVxfPJZEaB6J5BQ6BSSS8Ad6B0xKqGoEZcAHMgZMQeAOOAc9GfS5KApfAFPiK5FZt6EaRvRBQKBt9AqJZAH6vAZvcDpt8F4iOulD1CdjAM+AFsMm5SHf82vS16BJI1YlGHF0zrzuxiSrnMvurMKFT42Mb2Mk3yk19sginKvXp5zjnIE3II+DjmkiT5ltFmlgVuAWc8Y+YmqrfQbg1+UHsinnWHDjjojGqtnTFWnvbdaHgEqKEpgZJ6U6Dqo1omwLN1pc2uVRp8fxf4PcRfQPvdjcZYKj40wAAAABJRU5ErkJggg==" /> </button>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJhJREFUSEvtlcsNgDAMQ18nYARgE0aByWAURoEN2ABUiXKgROajXlB7bRLbSVo7Eh+XuD4KoAF6oDKITEAHjBZRBeALlEKlj6nfAqx7okVE3csWqQLqPgIICV9nfyg+S08OEJhL6SeJZvzr4WWAPINjB/IWyYf53xYtQPHwS52vnM9qkbfK4YabBQ6+eHtlncoyH4qIw5MDbKVmKBnjiikFAAAAAElFTkSuQmCC"/> 
                                         */}
                {/* CARRITO AUMENTAR */}
                {/* onClick={()=> dispatch(modiffyQuantityThunk(cart.id, cart.quantity+1))} */}
                {/* </div>
                                </Col> <br />
                            </Row> <hr /> */}
                {/* {cart?.product.title} <br />
                        <img src={cart?.product.images[0].url} alt="" style={{maxWidth: 50, maxHeight: 50, minHeight: 48}}/> <br />
                        {cart?.product.price} */}
                {/* </div>
                    ))}
                
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <b style={{color: "var(--primary)", fontWeight: "bolder"}}>TOTAL</b> <b>{total.toFixed(2)}</b>
                </div> */}

            </Container> <hr />
            {/* <Button onClick={() => dispatch(purchaseCartThunk())}> Check Out </Button> */}
        </Offcanvas>
    );
};

export default Cart;