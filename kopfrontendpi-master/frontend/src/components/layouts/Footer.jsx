import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons' 
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
        <footer className="bg-[#25133A] text-[#fff] mt-20 ">
            <div className="flex flex-col gap-6 lg:justify-between lg:flex-row lg:items-start lg:px-28 px-[5%] py-4 lg:py-10">
                <div className="lg:w-[217px]">
                    <h1 className="text-[20x] lg:text-[24x] lg:font-weight-700 lg:text-3xl uppercase font-bold">
                        KOP MALL
                    </h1>
                    <div className="mt-6 lg:mt-3">
                        <h2 className='text-[20px] font-weight-500 capitalize mb-4'>subscribe</h2>
                        <span className="text-[16px] text-[#FAFAFA] font-weight-400">Get 10% off your first order</span>
                        <form action="" className="mt-5">
                            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                                
                                {/* ring-2 ring-gray-300 */}
                                <input className='lg:w-[100%] pr-10 pl-2 border-[1px] bg-transparent 
                                border-solid border-[#fff] py-2 font-semibold placeholder-gray-500 text-[12px] text-black rounded lg:rounded-xl  focus:ring-2 ' 
                                    type="text" 
                                    autocomplete="off"
                                    name="email" 
                                    placeholder='Enter your email' />
                                <FontAwesomeIcon icon={faArrowRight} className=' w-5 h-5 absolute ml-56 lg:ml-44' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-[175px]">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Support</h2>
                    <div className="mt-6 flex flex-col gap-4 text-[16px] text-[#FAFAFA] font-weight-400">
                        <span className="">This is a placeholder for the office address</span>
                        <span className="">kopmall@mail.com</span>
                        <span className="">+234 --------------</span>

                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-[175px]">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Account</h2>
                    <div className="mt-6 flex flex-col gap-4 text-[16px] text-[#FAFAFA] font-weight-400">
                        <span className=""><Link to="/user/account" clLinkssName="no-underline text-[#FFFFFF]">My Account</Link></span>
                        <span className=""><Link to="/login" className="no-underline text-[#FFFFFF]">Login</Link> / <Link to="" className='no-underline text-[#FFFFFF]'>Register</Link></span>
                        <span className=""><Link to="/cart" className="no-underline text-[#FFFFFF]">Cart</Link></span>
                        <span className=""><Link to="/user/saveditems" className="no-underline text-[#FFFFFF]">Wishlist</Link></span>
                        <span className=""><Link to="/store/2" className="no-underline text-[#FFFFFF]">Shop</Link></span>
                        
                    </div>
                </div>
                <div className="mt-6 lg:mt-0 lg:w-[175px]">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Quick Link</h2>
                    <div className="mt-6 flex flex-col gap-4 text-[16px] text-[#FAFAFA] font-weight-400">
                        <span className=""><Link to="" className="no-underline text-[#FFFFFF]">Privacy Policy</Link></span>
                        <span className=""><Link to="" className="no-underline text-[#FFFFFF]">Terms Of Use</Link></span>
                        <span className=""><Link to="" className="no-underline text-[#FFFFFF]">FAQ</Link></span>
                        <span className=""><Link to="" className="no-underline text-[#FFFFFF]">Contact</Link></span>
                        
                    </div>
                </div>

                <div className="mt-6 lg:mt-0 lg:w-[175px]">
                    <h2 className='text-[20px] font-weight-500 capitalize'>Social media</h2>
                    <div className="mt-6 flex flex-col gap-4 text-[16px] text-[#FAFAFA] font-weight-400">
                        <span className="">Connect with us</span>
                        <div className="icons_social flex gap-7">
                            <FontAwesomeIcon className='w-7 h-7' icon={faFacebookF} />
                            <FontAwesomeIcon className='w-7 h-7' icon={faInstagram} />
                            <FontAwesomeIcon className='w-7 h-7' icon={faTwitter} />
                            <FontAwesomeIcon className='w-7 h-7' icon={faLinkedin} />
                        
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="mt-6 border-t-[#FFFFFF] border-t-[1px] py-6 text-center">
                <span className='text-[16px] text-[#FFFFFF] font-weight-400'>&copy Copyright KOP Mall 2024. All right reserved</span>
            </div>
        </footer>
    </>
  )
}

export default Footer