import axios from 'axios';
import { 
    PRODUCT_LIST_REQUEST, 
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from '../constants/productConstants';

 
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    // console.log("I am here")
    try{
        const { data } = await axios.get('/api/products');
        // console.log(data)
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data});
    } catch(err) {
        // console.log("Its an error")
        dispatch({ type: PRODUCT_LIST_FAIL, payload: err.message});
    }
};

export const detailsProduct = (productId) => async (dispatch) => {
    dispatch({ type: PRODUCT_DETAILS_REQUEST, payload: productId });

    try {
        const { data } = await axios.get(`/api/products/${productId}`);
        dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: data});
    } catch(error) {
        dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message});
    }
};