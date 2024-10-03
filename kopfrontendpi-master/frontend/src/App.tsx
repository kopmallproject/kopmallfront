import React, {useEffect, useState} from 'react';
import axios from 'axios';
import SignIn from './components/screens/authentication/pi/SignIn';
import SignUp from './components/screens/authentication/SignUp';
import Login from './components/screens/authentication/Login';
import ForgetPassword from './components/screens/authentication/ForgetPassword';
import Recovery from './components/screens/authentication/Recovery';
import OTP from './components/screens/authentication/OTP';
import HomePage from './components/screens/HomePage';
import ProductPage from './components/screens/productPage/ProductPage';
import CartPage from './components/screens/productPage/CartPage';
import ProductPageOverview from './components/screens/productPage/ProductPageOverview';
import UserAccount from './components/screens/userPage/UserAccount';
import UserOrder from './components/screens/userPage/UserOrder';
import UserOrderdetails from './components/screens/userPage/UserOrderdetails';
import UserSavedItems from './components/screens/userPage/UserSavedItems';
import UserAddressBook from './components/screens/userPage/UserAddressBook';
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Header2 from './components/layouts/Header2';
import PrivateRoute from "./components/PrivateRoute";

import { createContext, Dispatch, SetStateAction } from 'react'
import { baseUrl } from './components/baseUrl';
import CheckOut from './components/screens/productPage/CheckOut';

type MyPaymentMetadata = {};

type AuthResult = {
  accessToken: string,
  user: {
    uid: string,
    username: string
  }
};

type LoginStateType = boolean;
type SetLoginStateType = Dispatch<SetStateAction<LoginStateType>>;

// interface LoginContextType {
//   value: [LoginStateType, SetLoginStateType];
// }

export type LoginContextType = [LoginStateType, SetLoginStateType];



export type User = AuthResult['user'];

interface PaymentDTO {
  amount: number,
  user_uid: string,
  created_at: string,
  identifier: string,
  metadata: Object,
  memo: string,
  status: {
    developer_approved: boolean,
    transaction_verified: boolean,
    developer_completed: boolean,
    cancelled: boolean,
    user_cancelled: boolean,
  },
  to_address: string,
  transaction: null | {
    txid: string,
    verified: boolean,
    _link: string,
  },
};

// Make TS accept the existence of our window.__ENV object - defined in index.html:
interface WindowWithEnv extends Window {
  __ENV?: {
    backendURL: string, // REACT_APP_BACKEND_URL environment variable
    sandbox: "true" | "false", // REACT_APP_SANDBOX_SDK environment variable - string, not boolean!
  }
}

// interface LoginContextType {
//   isLoggedIn: boolean;
//   login: () => void;
//   logout: () => void;
// }

const _window: WindowWithEnv = window;
const backendURL = _window.__ENV && _window.__ENV.backendURL;

const axiosClient = axios.create({ baseURL: `${backendURL}`, timeout: 20000, withCredentials: true});
const config = {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}};

// export const LoginContext = createContext();
// export const LoginContext = createContext<LoginContextType | null>(null);
export const LoginContext = createContext<LoginContextType | null>(null);
// export const LoginContext = createContext<LoginContextType>([false, () => {}])

const App: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const signIn = async () => {
    const scopes = ['username', 'payments'];
    console.log("window.Pi", window.Pi)
    const authResult: AuthResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound);
    signInUser(authResult);
    setUser(authResult.user);
  }

  const signOut = () => {
    setUser(null);
    signOutUser();
  }

  const signInUser = (authResult: AuthResult) => {
    axiosClient.post('/user/signin', {authResult});
    return setShowModal(false);
  }

  const signOutUser = () => {
    return axiosClient.get('/user/signout');
  }

  const onModalClose = () => {
    setShowModal(false);
  }

  const orderProduct = async (memo: string, amount: number, paymentMetadata: MyPaymentMetadata) => {
    if(user === null) {
      return setShowModal(true);
    }
    const paymentData = { amount, memo, metadata: paymentMetadata };
    const callbacks = {
      onReadyForServerApproval,
      onReadyForServerCompletion,
      onCancel,
      onError
    };
    const payment = await window.Pi.createPayment(paymentData, callbacks);
    console.log(payment);
  }

  const onIncompletePaymentFound = (payment: PaymentDTO) => {
    console.log("onIncompletePaymentFound", payment);
    return axiosClient.post('/payments/incomplete', {payment});
  }

  const onReadyForServerApproval = (paymentId: string) => {
    console.log("onReadyForServerApproval", paymentId);
    axiosClient.post('/payments/approve', {paymentId}, config);
  }

  const onReadyForServerCompletion = (paymentId: string, txid: string) => {
    console.log("onReadyForServerCompletion", paymentId, txid);
    axiosClient.post('/payments/complete', {paymentId, txid}, config);
  }

  const onCancel = (paymentId: string) => {
    console.log("onCancel", paymentId);
    return axiosClient.post('/payments/cancelled_payment', {paymentId});
  }

  const onError = (error: Error, payment?: PaymentDTO) => {
    console.log("onError", error);
    if (payment) {
      console.log(payment);
      // handle the error accordingly
    }
  }

  useEffect(() => {
    
    const refreshFunction = async () => {
      
      if (localStorage.refreshToken) {
        try {

        
          console.log('refreshing')
          const url = baseUrl + '/token/refresh'
          
          const config={
            headers: {
                'Content-type': 'application/json'
            }
          }

          const payload = {
              refresh: localStorage.getItem('refreshToken')
          };

          console.log('payload', payload)



          const {data} = await axios.post(`${baseUrl}/token/refresh`, payload, config)
          localStorage.setItem("accessToken", data.access);
          localStorage.setItem("refreshToken", data.refresh);
          setLoggedIn(true)
          console.log(data);
        }
        catch(error) {
          console.log('refresh error', error)
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          setLoggedIn(false)
          navigate("/login")
        }
      }
    }

    const minutes = 1000 * 60
    refreshFunction()

    setInterval(refreshFunction, minutes * 3)
  })

  const [loggedIn, setLoggedIn] = useState(false)
  // const [loggedIn, setLoggedIn] = useState<LoginStateType>(
  //   localStorage.accessToken ? true : false);

  function changeLoggedIn(value: any) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
    }
  }
  return (
    <>
    <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
    {/* <LoginContext.Provider value={{ value: [loggedIn, setLoggedIn] }}> */}
      
        <Header2 user={user} onSignIn={signIn} onSignOut={signOut} />
        {/* <Header2 /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/store/:id" element={<ProductPage />} />
          {/* <Route path="/cart/:id?" element={<CartPage onClickBuy={orderProduct} />} /> */}
          {/* <PrivateRoute path="/cart/:id?" element={(props) => <CartPage {...props} onClickBuy={orderProduct} />} /> */}
          {/* <PrivateRoute
          path="/cart/:id?"
          element={<CartPage onClickBuy={orderProduct} />}
        /> */}
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/cart/:id?" element={<CartPage onClickBuy={orderProduct} />} />
          <Route path="/checkout" element={<CheckOut onClickBuy={orderProduct}/>} />
          {/* </Route> */}
          <Route path="/product/:id" element={<ProductPageOverview />} />
          <Route path="/user/account" element={<UserAccount />} />
          <Route path="/user/order" element={<UserOrder />} />
          <Route path="/user/order/details" element={<UserOrderdetails />} />
          <Route path="/user/saveditems" element={<UserSavedItems />} />
          <Route path="/user/addressbook" element={<UserAddressBook />} />
        </Routes>
        { showModal && <SignIn onSignIn={signIn} onModalClose={onModalClose} /> }
      
      </LoginContext.Provider>
    </>
  );
};

export default App;
