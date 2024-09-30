import axios from 'axios'
import { baseUrl } from "../components/baseUrl";
import { ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS,
    ORDER_FAIL, ORDER_SUCCESS, ORDER_REQUEST, ORDER_DETAILS_FAIL, 
    ORDER_DETAILS_SUCCESS, ORDER_DETAILS_REQUEST
 } from '../constants/OrderConstants';

export const listOrders = () => async (dispatch) => {
    
    try {
        dispatch({type: ORDER_LIST_REQUEST})
        const {data} = await axios.get(`${baseUrl}/orders`);
        // let data = {};
        // if (id === '0') {
        //     const {response} = await axios.get(`${baseUrl}/stores/products`);
        //     data = response
        // } else {
        //     const {response} = await axios.get(`${baseUrl}/stores/${id}/products/category`);
        //     data = response
        // }
        
        console.log('data', data)
        

        dispatch({
            type: ORDER_LIST_SUCCESS,
            payload:data
        })
    }
    catch(error) {
        console.error('product error:', error.response ? error.response.data : error.message);
        dispatch({
            type: ORDER_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail 
            : error.message,
        })
    }
}

export const order = (id) => async (dispatch) => {
    try {
        dispatch({type: ORDER_REQUEST})
        const {data} = await axios.get(`${baseUrl}/orders/${id}/`);
        console.log("order actions", data )
        // data["stockCount"] = 20
        dispatch({
            type: ORDER_SUCCESS,
            // payload:data[0]
            payload: data
            
        })
    }
    catch(error) {
        console.error('order error:', error.response ? error.response.data : error.message);
        dispatch({
            type: ORDER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail 
            : error.message,
        })
    }
}

export const orderDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: ORDER_DETAILS_REQUEST})
        const {data} = await axios.get(`${baseUrl}/orders/${id}/orderitems/`);
        console.log("actions", data )
        // data["stockCount"] = 20
        dispatch({
            type: ORDER_DETAILS_SUCCESS,
            // payload:data[0]
            payload: data
            
        })
    }
    catch(error) {
        console.error('orderdetails error:', error.response ? error.response.data : error.message);
        dispatch({
            type: ORDER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail 
            : error.message,
        })
    }
}