'use client';
import { useState } from 'react';
import {
  HiBars3BottomLeft,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass
} from 'react-icons/hi2';
import NavLinks from '../../../MobileNavLinks';
import Image from 'next/image';
import Logo from '../../../../../assets/images/logo.jpg';

function MobileNavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="mobile-nav-bar lg:hidden flex flex-col mb-2 px-3 md:px-[5%] md:mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <HiBars3BottomLeft
              onClick={handleNavToggle}
              className="h-8 w-8 cursor-pointer"
            />
            <Image
              src={Logo}
              alt="user-icon"
              className="bg-cover w-[50px] h-[50px]"
            />{' '}
          </div>
          <div className="flex items-center gap-6">
            <HiOutlineShoppingCart className="h-6 w-6" />
            <HiOutlineUser className="h-6 w-6" />
          </div>
        </div>
        <div className="search-bar-wrapper flex items-center bg-white border border-gray-300 rounded-md w-full px-2 py-1">
          <HiOutlineMagnifyingGlass className="ml-3 h-6 w-6 text-gray-300 cursor-pointer" />
          <input
            type="text"
            placeholder="Search for products, brands and categories."
            className="poppins bg-transparent font-light outline-none px-4 py-1 text-black w-full text-[12px]"
          />
        </div>
      </div>
      {/* Conditionally render NavLinks */}
      <div
        className={`${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out fixed top-0 left-0 w-10/12 sm:w-1/2 h-full z-30`}
      >
        <NavLinks handleNavToggle={handleNavToggle} />
      </div>
    </>
  );
}

export default MobileNavBar;
