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
      <div className="mobile-nav-bar lg:hidden flex flex-col justify-center px-3 w-full md:px-[5%] md:mx-auto shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 py-2">
            <h3 className="poppins font-bold text-lg">Kop Mall</h3>
            <Link href="/">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[40px] h-[40px]"
              />{' '}
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative pr-4">
              <HiOutlineBell className="text-[30px]" />
              <div
                className="absolute top-[-12px] right-[8px] text-[10px] bg-white w-[25px] h-[25px] rounded-full 
              text-gray-800 text-center font-bold pt-[4px]"
              >
                10
              </div>
            </div>
            <div className="w-[40px] h-[40px] border rounded-full flex justify-center items-center">
              <HiBars3BottomLeft
                onClick={handleNavToggle}
                className="h-6 w-6 cursor-pointer"
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
