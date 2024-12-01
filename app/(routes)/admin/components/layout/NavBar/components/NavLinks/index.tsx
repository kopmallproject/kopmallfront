import {
  HiHome,
  HiShoppingBag,
  HiUsers,
  HiMegaphone,
  HiArrowLeftCircle,
  HiOutlineBell,
  HiOutlineXMark
} from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';

import { HiMiniSquaresPlus } from 'react-icons/hi2';
import { HiBuildingStorefront } from 'react-icons/hi2';
import { HiClipboardDocumentList } from 'react-icons/hi2';
import { HiWallet } from 'react-icons/hi2';

type NavLinksProps = {
  handleNavToggle: () => void;
};

function NavLinks({ handleNavToggle }: NavLinksProps) {
  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 min-h-screen z-30 bg-white shadow-md">
      <div className="flex flex-col min-h-screen relative h-[500px] overflow-y-auto pb-[100px]">
        <div className="flex justify-between items-center px-4 py-8 primary-background-color text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-slate-400">
              <Image
                src={Logo}
                alt="logo"
                className="bg-cover w-[40px] h-[40px]"
              />
            </div>
            <div className="poppins">
              <div className="font-medium mb-1 text-[14px]">Aaron Ramsey</div>
              <div className="block text-[12px]">Admin</div>
            </div>
          </div>
          <div className="w-[40px] h-[40px] border rounded-full">
            <div className="flex items-center justify-center w-[40px] h-[40px] translate-x-[-1px] translate-y-[-1px]">
              <HiOutlineXMark
                onClick={handleNavToggle}
                className="w-6 h-6 text-white"
              />
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-10 mt-10">
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiHome className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Dashboard</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className=" cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiMegaphone className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Orders</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiShoppingBag className="text-[20px]" />
              <span className="text-[14px] font-light poppins">
                Add Products
              </span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiUsers className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Chat</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiOutlineBell className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Marketing</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiArrowLeftCircle className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Logout</span>
            </div>
          </Link>
        </ul>
        <ul className="flex flex-col gap-10 mt-12 px-4">
          <li>
            <a
              href="/admin/dashboard"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiHome className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Dashboard</span>
            </a>
          </li>
          <li>
            <Link
              href="/admin/orders"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiShoppingBag className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Orders</span>
            </Link>
          </li>
          <li>
            <Link
              href="/admin/products"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiMiniSquaresPlus className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Products</span>
            </Link>
          </li>
          <li>
            <a
              href="/admin/customers"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiUsers className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Users</span>
            </a>
          </li>
          <li>
            <a
              href="/admin/customers"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiBuildingStorefront className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Stores</span>
            </a>
          </li>
          <li>
            <a
              href="/admin/marketing"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiClipboardDocumentList className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Deals</span>
            </a>
          </li>
          <li>
            <a
              href="/admin/marketing"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiMegaphone className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Campaigns</span>
            </a>
          </li>
          <li>
            <a
              href="/admin/marketing"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiWallet className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Wallet</span>
            </a>
          </li>
          <li className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500">
            <HiArrowLeftCircle className="w-6 h-6" />{' '}
            <span className="poppins text-medium text-[14px]">Log Out</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavLinks;
