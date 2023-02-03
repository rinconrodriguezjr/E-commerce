import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCarThunk, modiffyQuantityThunk } from '../store/slices/cart.slice';

const QuantityProductsCart = ({ handleClose, cart }) => {

    const dispatch = useDispatch()

    const updateQuantity = (quantity) => {
        dispatch(modiffyQuantityThunk(
            cart.id,
            { quantity }
        ))
    }


    return (
        <li key={cart.id} style={{ listStyle: 'none' }} className='list'>
            <div className='product_inf' style={{display: "flex"}}>
                <img src={cart.product.images[0].url}  alt="" className='img-fluid' />
                <div className='details'>
                    <Link to={`/products/${cart.product.id}`} style={{textDecoration: "none"}} onClick={handleClose} className='title'>{cart.product.title}</Link>
                    <div className='quantity-box'>
                        <div className='btns'>
                            <button onClick={() => updateQuantity(cart.quantity - 1)}
                                disabled={cart.quantity <= 1}
                            ><i className='bx bx-minus'></i></button>
                            <div className='value'>{cart.quantity}</div>
                            <button onClick={() => updateQuantity(cart.quantity + 1)}><i className='bx bx-plus' ></i></button>
                        </div>
                    </div>
                </div>
                <div className='button-delete'>
                    <button onClick={() => dispatch(deleteCarThunk(cart.id))}>
                        <i className='bx bx-trash'></i>
                    </button>
                </div>
            </div>
            <div className='total'>
                <span className='label'>Total:</span>
                <b style={{ fontWeight: 'bold' }}>$ {cart.product.price * cart.quantity}</b>
            </div>
        </li>
    );
};

export default QuantityProductsCart;