'use client';
import { useState } from 'react';
import {
  HiBars3BottomLeft,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass
} from 'react-icons/hi2';
import NavLinks from '../../../NavLinks';

function MobileNavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="mobile-nav-bar lg:hidden flex flex-col mt-5 px-3 md:px-[5%] md:mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <HiBars3BottomLeft
              onClick={handleNavToggle}
              className="h-8 w-8 cursor-pointer"
            />
            <h3 className="poppins">KOP MALL</h3>
          </div>
          <div className="flex items-center gap-4">
            <HiOutlineShoppingCart className="h-8 w-8" />
            <HiOutlineUser className="h-8 w-8" />
          </div>
        </div>
        <div className="search-icon mt-5 flex items-center bg-white border border-gray-300 rounded-md w-full p-2">
          <HiOutlineMagnifyingGlass className="h-8 w-8 text-gray-300 cursor-pointer" />
          <input
            type="text"
            placeholder="Search for products, brands and categories."
            className="bg-transparent font-medium outline-none px-4 py-2 text-black w-full text-sm"
          />
        </div>
      </div>
      {/* Conditionally render NavLinks */}
      <div
        className={`${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-1000 ease-in-out fixed top-0 left-0 w-3/4 sm:w-1/2 h-full z-30`}
      >
        <NavLinks handleNavToggle={handleNavToggle} />
      </div>
    </>
  );
}

export default MobileNavBar;
