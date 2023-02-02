import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const purchaseSlice = createSlice({
	name: 'purchasesSlice',
    initialState: [],
    reducers: {
        setPurchases: (state, action) =>{
            const purchases = action.payload
            return purchases;
        }
    }
})

export const getPurchasesthunk =() => (dispatch) =>{
    dispatch(setIsLoading(true));
    return axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases/`, getConfig() )
    .then(res => dispatch(setPurchases(res.data)))
    .finally(()=> dispatch(setIsLoading(false)));
}


export const { setPurchases } = purchaseSlice.actions;

export default purchaseSlice.reducer;