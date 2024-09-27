import React, { useContext, useEffect, useState} from 'react'
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { Menu, Smartphone, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { listCategories } from '../../actions/productsActions'
import { logout } from '../../actions/userAction'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext, User, LoginContextType} from '../../App'
import HeaderCategory from '../HeaderCategory'




interface Props {
    onSignIn: () => void;
    onSignOut: () => void;
    user: User | null
}

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

const Header2: React.FC<Props> = (props) => {
    // const userLogin = useSelector(state => state.userLogin)
    // const {userInfo} = userLogin;
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showMenuBar, setShowMenuBar] = useState(false)

    // const cart = useSelector(state => state.cart)
    const cart = useSelector((state: CartState) => state.cart);
    const { cartItems } = cart

    // console.log('user name', userInfo)

    const logoutHandler=()=>{
        setLoggedIn(false)
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        navigate("/login")
        // dispatch(logout())
    }
    const [loggedIn, setLoggedIn] = useContext(LoginContext) as LoginContextType;
    // const [loggedIn, setLoggedIn] = useContext(LoginContext) as [boolean, React.Dispatch<React.SetStateAction<boolean>>];

    useEffect(() => {
        console.log("logged in", loggedIn)
    })
  return (
    <>
        <header className='w-full lg:h-28 h-14 lg:border-b-[1px] border-b-gray relative'>
            <div className="max-w-screen-2xl h-full mx-auto lg:px-28 px-[5%] py-5 flex items-center justify-between">
                <div className='flex items-center gap-6 '>
                    <Menu className={showMenuBar ? 'lg:hidden hidden': 'lg:hidden'} onClick={() => setShowMenuBar(true)}/>
                    <X className={showMenuBar ?  'lg:hidden' : 'lg:hidden hidden'} onClick={() => setShowMenuBar(false)}/>
                    <div className={showMenuBar ?  'mb-menu-bar lg:hidden w-[380px] h-[100%] bg-[#FAF7F7] absolute z-10 top-[68px] left-0 py-4' : 'hidden'} >
                        <div className="bg-[#FAF7F7] pb-3">
                            <h3 className="text-[20px] font-medium py-3 bg-[#D7D7D780] px-4">My Account</h3>
                            <div className="px-4 flex flex-col gap-2">
                                <Link className="flex flex-row gap-2 no-underline text-[#000000]" to={`/store/`}>
                                    
                                    <Smartphone />
                                    <span>Orders</span>
                                    
                                </Link>

                                <Link className="flex flex-row gap-2 no-underline text-[#000000]" to={`/store/`}>
                                    
                                    <Smartphone />
                                    <span>Saved Items</span>
                                    
                                </Link>

                                <Link className="flex flex-row gap-2 no-underline text-[#000000]" to={`/store/`}>
                                    
                                    <Smartphone />
                                    <span>Address book</span>
                                    
                                </Link>

                                <Link className="flex flex-row gap-2 no-underline text-[#000000]" to={`/store/`}>
                                    
                                    <Smartphone />
                                    <span>Wallet</span>
                                    
                                </Link>
                                

                            </div>
                            
                        </div>
                        <div className="bg-[#FAF7F7] pb-7">
                            <h3 className="text-[20px] font-medium py-3  px-4">CATEGORIES</h3>
                            <HeaderCategory />
                        </div>

                    </div>
                    <h1 className='text-[20x] lg:text-3xl uppercase font-bold'>
                        KOP MALL
                    </h1>
                    {/* w-full  */}
                    <form action="" className='gap-5 flex max-w-lg lg:max-w-md absolute lg:relative -bottom-12  lg:bottom-0'>
                        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                            <FontAwesomeIcon icon={faSearch} className='pointer-events-none w-3 h-3 absolute ml-3' />
                            {/* ring-2 ring-gray-300 */}
                            <input className='lg:w-[360px] pr-3 pl-10 border-[1px] 
                            border-solid\ border-[#00000080] py-2 font-semibold placeholder-gray-500 text-[12px] text-black rounded lg:rounded-xl  focus:ring-2 ' 
                                type="text" 
                                autoComplete="off"
                                name="search" 
                                placeholder='Search for products, brands and categories.' />
                                
                        </div>
                        <button className='hidden lg:block bg-[#FCB349] text-20px px-3 rounded font-weight-700 hover:text-[#FCB349] hover:bg-white hover:border-[1px] hover:border-[#FCB349]'>Search</button>
                    </form>
                </div>
                <div>
                    <ul className='flex items-center gap-6 uppercase text-sm font-semibold'>
                        <li className='hidden lg:inline-block navbarLi links relative '>
                            <a href="" className="flex gap-1 items-center text-[#000000]">
                                <FontAwesomeIcon icon={faQuestionCircle} />
                                <span className='hidden lg:inline-block'>Help</span>
                                <FontAwesomeIcon icon={faArrowDown }  className="hidden lg:inline-block"/>
                            </a>

                            <div className="sub_menu subMenu">
                                <div className="card ">
                                    <a href="" className="underline-none">
                                        <span className='text-md text-[#FCB349]'>Lorem</span>
                                    </a>
                                </div>
                                <div className="card">
                                    <a href="" className="">
                                        <span className='text-md text-[#FCB349]'>Lorem</span>
                                    </a>
                                </div>
                                <div className="card">
                                    <a href="" className="">
                                        <span className='text-md text-[#FCB349]'>Lorem</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li className='relative'>
                            <FontAwesomeIcon icon={faCartShopping} className='lg:hidden'/>
                            <Link to="/store/2" className='text-[#000000]'><span className='hidden lg:inline-block'>Shop</span></Link>
                            
                        </li>
                        <li className='relative'>
                            <FontAwesomeIcon icon={faCartShopping} className='lg:hidden'/>
                            <Link to="/cart" className='text-[#000000]'><span className='hidden lg:inline-block'>Cart</span></Link>
                            <span className='w-4 h-4 bg-slate-400 text-white rounded-full 
                                absolute left-0 -bottom-2 text-xs flex items-center justify-center'>{cartItems.length}</span>
                        </li>
                        <li className='links relative'>
                            <a href="#" className="flex gap-1 items-center text-[#000000]">
                                <FontAwesomeIcon icon={faPerson} />
                                <span className='hidden lg:inline-block'>account</span>
                                <FontAwesomeIcon icon={faArrowDown}  className="hidden lg:inline-block"/>
                            </a>
                            {loggedIn ? (
                                <div className="sub_menu subMenu">
                                    <span>Welcome user</span>
                                    <div className="card">
                                        <a onClick={logoutHandler} className="">
                                            <span className='text-md text-[#FCB349]'>Logout</span>
                                        </a>
                                    </div>
                                    
                                </div>
                            ) : (
                                <div className="sub_menu subMenu">
                                    <span>New User?</span>
                                    <div className="card">
                                        <Link to="/login" className="">
                                            <span className='text-md text-[#FCB349]'>Login</span>
                                        </Link>
                                    </div>
                                    <div className="card">
                                        <Link to="/signup" className="">
                                            <span className='text-md text-[#FCB349]'>Signup</span>
                                        </Link>
                                    </div>
                                    
                                </div>
                            )}

                            {/* {props.user ? (
                                <div className="sub_menu subMenu">
                                    @{props.user.username} <button type="button" onClick={props.onSignOut}>Sign out</button>
                                </div>
                                
                            ) : (
                                <div className="sub_menu subMenu">
                                    <button onClick={props.onSignIn}>Sign in</button>
                                </div>
                            )} */}
                            
                        </li>


                        <li className='links relative'>
                            <a href="#" className="flex gap-1 items-center text-[#000000]">
                                <FontAwesomeIcon icon={faPerson} />
                                <span className='hidden lg:inline-block'>Wallet</span>
                                <FontAwesomeIcon icon={faArrowDown}  className="hidden lg:inline-block"/>
                            </a>
                            {props.user === null ? (
                                <div className="sub_menu subMenu my-6 mr-2">
                                    <span>PI</span>
                                    <div className="card">
                                        <button onClick={props.onSignIn}>Sign in</button>
                                    </div>
                                    
                                </div>
                            ) : (
                                <div className="sub_menu subMenu">
                                    
                                    <div className='card'>
                                        @{props.user.username} <button type="button" onClick={props.onSignOut}>Sign out</button>
                                    </div>
                                   
                                    
                                </div>
                            )}

                            {/* {props.user ? (
                                <div className="sub_menu subMenu">
                                    @{props.user.username} <button type="button" onClick={props.onSignOut}>Sign out</button>
                                </div>
                                
                            ) : (
                                <div className="sub_menu subMenu">
                                    <button onClick={props.onSignIn}>Sign in</button>
                                </div>
                            )} */}
                            
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header2