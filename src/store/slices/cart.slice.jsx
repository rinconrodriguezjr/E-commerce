import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoading.slice";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        setCarts: (state, action) =>{
            const carts = action.payload;
            return carts;
        }
    }
})

export const getCartsThunk = () => (dispatch) =>{
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, getConfig() )
        .then(res => dispatch(setCarts(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addPurchasesthunk =(purchase) => (dispatch) =>{
    dispatch(setIsLoading(true));
    return axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/cart`, purchase, getConfig())
        .then(res => dispatch(getCartsThunk()))
        // .catch(() => alert("Hubo un error"))
        .finally(()=> dispatch(setIsLoading(false)));
}

export const purchaseCartThunk =() => (dispatch) =>{
    dispatch(setIsLoading(true));
    return axios.post(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, {}, getConfig())
        .then(res => dispatch(getCartsThunk()))
        // .catch(() => alert("Hubo un error"))
        .finally(()=> dispatch(setIsLoading(false)));
}

export const deleteCarThunk = (id) => (dispatch) => {
    return axios.delete('https://e-commerce-api-v2.academlo.tech/api/v1/cart/' + id, getConfig())
        .then(res => {
            swal({
                title: "Eliminando Carrito",
                text: "Se perdera tu producto!",
                icon: "warning",
                buttons: "ok",
                dangerMode: true,
            })
                .then(() => {
                    dispatch(carGetThunk())
                });
        })
}

export const modiffyQuantityThunk = (id,quantity) => (dispatch) => {
    return axios.put('https://e-commerce-api-v2.academlo.tech/api/v1/cart/'+ id,quantity, getConfig())
        .then(() => dispatch(carGetThunk()))
}

export const { setCarts } = cartSlice.actions;

export default cartSlice.reducer;