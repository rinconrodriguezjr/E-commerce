import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCarThunk, modiffyQuantityThunk } from '../store/slices/car.slice';

const QuantityProductsCart = ({ handleClose, car }) => {

    const dispatch = useDispatch()

    const updateQuantity = (quantity) => {
        dispatch(modiffyQuantityThunk(
            car.id,
            { quantity }
        ))
    }

    return (
        <li key={car.id} style={{ listStyle: 'none' }} className='list'>
            <div className='product_inf'>
                <img src={car.product.images[0].url} alt="" className='img-fluid' />
                <div className='details'>
                    <Link to={`/products/${car.product.id}`} onClick={handleClose} className='title'>{car.product.title}</Link>
                    <div className='quantity-box'>
                        <div className='btns'>
                            <button onClick={() => updateQuantity(car.quantity - 1)}
                                disabled={car.quantity <= 1}
                            ><i className='bx bx-minus'></i></button>
                            <div className='value'>{car.quantity}</div>
                            <button onClick={() => updateQuantity(car.quantity + 1)}><i className='bx bx-plus' ></i></button>
                        </div>
                    </div>
                </div>
                <div className='button-delete'>
                    <button onClick={() => dispatch(deleteCarThunk(car.id))}>
                        <i className='bx bx-trash'></i>
                    </button>
                </div>
            </div>
            <div className='total'>
                <span className='label'>Total:</span>
                <b style={{ fontWeight: 'bold' }}>$ {car.product.price * car.quantity}</b>
            </div>
        </li>
    );
};

export default QuantityProductsCart;