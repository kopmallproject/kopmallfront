'use client';
import { useState } from 'react';
import {
  HiBars3BottomLeft,
  HiOutlineUser,
  HiOutlineShoppingCart,
  HiOutlineMagnifyingGlass,
  HiOutlineBell
} from 'react-icons/hi2';
// import NavLinks from '../../../MobileNavLinks';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';
import Link from 'next/link';
import NavLinks from '../NavLinks';

function MobileNavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="mobile-nav-bar lg:hidden flex flex-col justify-center px-3 w-full md:px-[5%] md:mx-auto shadow-md bg-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 py-2">
            <Link href="/">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[40px] h-[40px]"
              />{' '}
            </Link>
            <h3 className="poppins font-bold text-[16px]">Mall Admin</h3>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative pr-4">
              <HiOutlineBell className="text-[30px]" />
              <div
                className="absolute top-[-8px] right-[12px] text-[10px] bg-white w-[20px] h-[20px] rounded-full 
              text-center text-white font-medium poppins flex justify-center items-center primary-background-color"
              >
                10
              </div>
            </div>
            <div className="w-[40px] h-[40px] border rounded-full flex justify-center items-center">
              <HiBars3BottomLeft
                onClick={handleNavToggle}
                className="h-6 w-6"
              />
            </div>
          </div>
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
