// middleware/authMiddleware.js
import { REFRESH_TOKEN_SUCCESS } from "../constants/UserConstants"; // Import REFRESH_TOKEN
import { refreshToken, logout } from "../actions/userAction";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";


// const useAuth = () => {
//   const dispatch = useDispatch()
//   const { accessToken } = useSelector((state) => state.userLogin);
//   console.log("autthi", accessToken)

//   useEffect(() => {
//     if (accessToken && !isTokenExpired(accessToken)) {
//       dispatch(refreshToken());
//     }
//   }, [accessToken, dispatch]);

//   return {
//     isAuthenticated: !!accessToken,
//   };
// };

export const authMiddleware = ({ dispatch, getState }) => (next) => async (action) => {


  try {
    const { userLogin } = getState().userLogin;
    // const accessToken = localStorage.getItem("accessToken")
    console.log("auth mid userlogin", userLogin)

    if (!userLogin.accessToken) {
      throw new Error("No access token found");
    }

    // Proceed with the action logic
    if (userLogin.accessToken && action.type !== REFRESH_TOKEN_SUCCESS && isTokenExpired(userLogin.accessToken)) {
      await dispatch(refreshToken());
    }
  
    return next(action);
  } catch (error) {
    console.error("Error in action:", error);
    // Handle the error, possibly dispatching an error action
  }
};

// Helper function to check token expiry
const isTokenExpired = (token) => {
  const decodedToken = JSON.parse(atob(token.split('.')[1]));
  const exp = decodedToken.exp * 1000;
  return Date.now() >= exp;
};

// export default useAuth;
