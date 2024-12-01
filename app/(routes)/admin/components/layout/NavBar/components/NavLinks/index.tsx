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
        <ul className="flex flex-col gap-10 mt-10 ml-4">
          <Link href="/admin">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiHome className="w-6 h-6" />{' '}
              <span className="text-[14px] font-light poppins">Dashboard</span>
            </div>
          </Link>
          <Link href="/admin/orders/123">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiMegaphone className="w-6 h-6" />
              <span className="poppins text-medium text-[14px]">Orders</span>
            </div>
          </Link>
          <Link href="/admin/products/123">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiShoppingBag className="text-[20px]" />
              <span className="poppins text-medium text-[14px]">Products</span>
            </div>
          </Link>
          <Link href="/admin/customers/123">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiUsers className="text-[20px]" />
              <span className="poppins text-medium text-[14px]">Users</span>
            </div>
          </Link>
          <Link href="/admin/categories">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiOutlineBell className="text-[20px]" />
              <span className="poppins text-medium text-[14px]">Stores</span>
            </div>
          </Link>
          <Link href="/admin/deals">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiOutlineBell className="text-[20px]" />
              <span className="poppins text-medium text-[14px]">Deals</span>
            </div>
          </Link>
          <Link href="/admin/marketing/123">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiOutlineBell className="text-[20px]" />
              <span className="poppins text-medium text-[14px]">Campaigns</span>
            </div>
          </Link>
          <Link href="/admin/marketing/123">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiOutlineBell className="text-[20px]" />
              <span className="poppins text-medium text-[14px]">Wallets</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiArrowLeftCircle className="text-[20px]" />
              <span className="poppins text-medium text-[14px]">Logout</span>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default NavLinks;
