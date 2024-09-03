import { refreshToken } from "../actions/userAction";
import { USER_LOGIN_REQUEST,  USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
    USER_LOGOUT, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL, REFRESH_TOKEN_FAIL,
    REFRESH_TOKEN_REQUEST, REFRESH_TOKEN_SUCCESS, SET_AUTH_TOKENS, CLEAR_AUTH_TOKENS
} from "../constants/UserConstants";

// const initialState = {
//     loading: false,
//     isAuthenticated: false,
//     accessToken: localStorage.getItem("accessToken") || null,
//     error: null,
//   };


// const initialState = {
//     isAuthenticated: !!localStorage.getItem("accessToken"),
//     accessToken: localStorage.getItem("accessToken") || null,
//     refreshToken: localStorage.getItem("accessToken") || null,
// };

export const userSignupReducers = (state={}, action) => {
    switch(action.type) {
        case USER_SIGNUP_REQUEST:
            return {loading: true}
        case USER_SIGNUP_SUCCESS:
            return {loading: false}
        case USER_SIGNUP_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const userLoginReducers = (state={userLogin:{}}, action) => {
    switch(action.type) {
        // case USER_LOGIN_REQUEST:
        //     return {...state, isAuthenticated: true, accessToken:action.payload.access, refreshToken:action.payload.refresh}}
        case USER_LOGIN_SUCCESS:
            return { userLogin: {isAuthenticated: true, accessToken:action.payload}}
        case REFRESH_TOKEN_SUCCESS:
            return {
                userLogin: {isAuthenticated: true, accessToken:action.payload}
                // ...state,
                // accessToken: action.payload
                // userInfo: action.payload
                // userLogin: {loading: false, isAuthenticated: true, accessToken:action.payload, error:null}
            };
        case USER_LOGIN_FAIL:
            return {
                // isAuthenticated: false, accessToken:null
                userLogin: {isAuthenticated: false, accessToken:null}
            }
        case USER_LOGOUT:
        case CLEAR_AUTH_TOKENS:
            return {
                userLogin: {isAuthenticated: false, accessToken:null}
                // isAuthenticated: false, accessToken:null,
                // userLogin: {loading: false, isAuthenticated: false, accessToken:null, error:null}
                // userInfo: null
            }
        case SET_AUTH_TOKENS:
            return {
                // accessToken: action.payload,
                // isAuthenticated:true
                userLogin: {isAuthenticated: true, accessToken:action.payload}
            }
        default:
            return state
    }
}