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
import Logo from '@/app/assets/images/logo.png';
import Link from 'next/link';
import { categories } from '@/app/data/category-list';

function MobileNavBar(): JSX.Element {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleNavToggle = (): void => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="mobile-nav-bar bg-gray-100 lg:hidden flex flex-col px-2 xsm:px-4 sm:px-[20px] md:px-[7%] md:mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <HiBars3BottomLeft
              onClick={handleNavToggle}
              className="h-6 w-6 cursor-pointer"
            />
            <Link href="/">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px]"
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Link href="/cart/123">
                <HiOutlineShoppingCart className="h-6 w-6" />
              </Link>
              <div
                className="cart-item-counter bg-green-600 text-white absolute w-[20px] 
              h-[20px] rounded-full text-[10px] flex items-center justify-center top-[-9px] right-[-10px]"
              >
                12
              </div>
            </div>
            <Link href="/user-account/my-account">
              <HiOutlineUser className="h-6 w-6" />
            </Link>
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
      {/* Overlay */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-20"
          onClick={handleNavToggle}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`${
          isNavOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out fixed top-0 left-0 w-10/12 sm:w-1/2 h-full z-30 bg-white`}
      >
        <NavLinks handleNavToggle={handleNavToggle} categories={categories} />
      </div>
    </>
  );
}

export default MobileNavBar;
