import { ORDER_LIST_FAIL, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS,
    ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS,
    ORDER_FAIL, ORDER_SUCCESS, ORDER_REQUEST
 } from "../constants/OrderConstants";


export const listOrdersReducers = (state={orders: []}, action) => {



    switch(action.type){
        case ORDER_LIST_REQUEST:
            return {loading: true, orders: []}
        case ORDER_LIST_SUCCESS:
            return {loading: false, orders: action.payload}
        case ORDER_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const orderReducers = (state={order: []}, action) => {



    switch(action.type){
        case ORDER_REQUEST:
            return {loading: true, ...state}
        case ORDER_SUCCESS:
            return {loading: false, order: action.payload}
        case ORDER_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}

export const orderDetailsReducers = (state={orderDetails: []}, action) => {



    switch(action.type){
        case ORDER_DETAILS_REQUEST:
            return {loading: true, ...state}
        case ORDER_DETAILS_SUCCESS:
            return {loading: false, product: action.payload}
        case ORDER_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state
    }
}