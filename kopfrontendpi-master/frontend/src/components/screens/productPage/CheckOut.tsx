import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../Loader';
import Message from '../../Message';
import ProductCardii from '../../ProductCardii';
import CartCard from '../../CartCard';
import { LoginContext, LoginContextType } from '../../../App';
import { AppDispatch } from '../../../store';

interface CartItem {
  product: string;
  name: string;
  image: string;
  price: number;
  countInStock: number;
  qty: number;
}

interface CartState {
  cart: {
    cartItems: CartItem[];
  };
}

const data = [
  {
    id: 0,
    rating: 5,
    reviews: 6,
  },
];

interface CheckOutPageProps {
  onClickBuy: (productName: string, price: number, options: { productId: string }) => void;
}

const CheckOut: React.FC<CheckOutPageProps> = ({onClickBuy}) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()

  const [allid, setAllid] = useState<string>("");
  const [allnames, setAllnames] = useState<string>("");
  const [subTotal, setSubTotal] = useState<number>(0);

  const context = useContext(LoginContext);

  // Ensure context is not null before destructuring
  if (!context) {
    throw new Error("useContext must be used within a LoginContext.Provider");
  }

  const [loggedIn, setLoggedIn] = context as LoginContextType;

  const cart = useSelector((state: CartState) => state.cart);
  // const accessToken = useSelector((state: any) => state.userLogin.accessToken);
  const { cartItems } = cart;


  const setParameters = () => {
    setSubTotal(
      cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
    setAllnames(
      cartItems.reduce((acc, item) => acc + item.name, '')
    )

    setAllid(
      cartItems.reduce((acc, item) => acc + item.product, '')
    )
    console.log("data checkout", allnames, subTotal, {productId: allid})
  }

  useEffect(() => {
    // if (accessToken && isTokenExpired(accessToken)) {
    //   dispatch(refreshToken());
    // }
    
      if(loggedIn == false) {
        navigate('/login')
      }

      setParameters();
    
  }, [loggedIn, dispatch]);

  const checkoutHandler = () => {
    navigate('/login?redirect=shipping');
    // Call the function passed from the parent with the necessary arguments
    onClickBuy(allnames, subTotal, {productId: allid});
    // name, price, { productId: 'apple_pie_1' }
  };

  return (
    <>
        <div className="flex flex-row justify-between items-center px-[4%] lg:px-28 bg-[#25133A] text-white py-1">
            <div className=""></div>
            <div className="">
              <span className="">June Sales For All Apple Products And Free Express Delivery - OFF 50%!</span>
              <Link to='/' className="">ShopNow</Link>
            </div>

            <select name="" id="" className='px-2 bg-[#25133A] text-white border-none'>
              <option value="English">English</option>
            </select>
        </div>

        <div className="flex flex-row justify-between items-center px-[4%] lg:px-28 py-4">
          <h1 className='text-[20x] lg:text-3xl text-[#FCB349] uppercase font-bold'>
              KOP MALL
          </h1>

          <h2 className='text-[38px] font-bold'>Checkout</h2>

          <div className=""></div>
        
        </div>

        <div className="flex flex-row justify-between items-center px-[4%] lg:px-28 py-4 bg-[#FCB349]">
          <img src="./assets/Megaphone.png" className='' alt="" />
          <p className="w-[903px] text-center text-[20px]">To complete your order delivery, you'll receive a One-Time Password (OTP) on your phone. Be ready to use it and receive your goodies! </p>
          <div className=""></div>
        </div>

        <div className="flex flex-col gap-7 items-center lg:items-start lg:flex-row lg:px-28  mt-8">
              <div className="w-[100%] lg:w-[770px] border-x-[1px] border-solid border-[#0000004D]">
                <h6 className="px-[4%] py-5 text-[24px] font-semibold border-y-[1px] border-solid border-[#0000004D]">
                  1. CHOOSE DELIVERY OPTION
                </h6>
                <div className="px-[4%] py-5 border-b-[1px] border-solid border-[#0000004D]">
                  {/* {cartItems.map((item) => (
                    <CartCard
                      key={item.product}
                      data={item}
                    />
                  ))} */}
                  <form action="" className="">
                    <div className="w-[474px] border-solid border-[1px] px-3 py-3">
                      <div className="flex flex-row gap-2">
                        <input type="radio" name="" id="" className='w-[30px] h-[30px] border-[#FCB349] border-[1px] border-solid bg-[#FCB349]'/>
                        <span className="text-[20px] font-semibold ">Deliver to me</span>
                      </div>
                      <div className="flex flex-col mt-3">
                        <span className="text-[16px] w-[428px]">Hi Wave, click on “Add Delivery Address” to specify an address</span>
                        <button className='bg-[#FCB349] mt-3 py-4 px-1 w-[258px] text-[16px] text-[#25133A;]'>Add Delivery Address</button>
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex flex-row gap-2">
                        <input type="radio" name="" id="" className='w-[30px] h-[30px] border-[#FCB349] border-[1px] border-solid bg-[#FCB349]'/>
                        <span className="text-[20px] font-semibold">Pickup from store</span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="w-[369px] py-4 border-[1px] border-solid border-[#0000004D]">
                <h6 className="px-4 pb-3 text-[20px] font-semibold border-b-[1px] border-solid border-[#0000004D]">
                  Cart Summary
                </h6>
                <div className="mt-5">
                  <div className="px-4 pb-3 flex flex-row justify-between border-b-[1px] border-solid border-[#0000004D]">
                    <span className="text-[20px] font-normal">SubTotal</span>
                    <span className="text-[16px] font-normal">π{subTotal}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <button
                      className="w-[329px] mx-auto mt-5 rounded-lg text-[#25133A] text-[20px] py-3 bg-[#FCB349]"
                      onClick={checkoutHandler}
                    >
                      CHECKOUT <span>(π{subTotal})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
    </>
  )}




export default CheckOut