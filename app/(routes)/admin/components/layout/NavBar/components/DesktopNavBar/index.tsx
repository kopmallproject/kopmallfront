import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';
import {
  HiArrowLeftCircle,
  HiHome,
  HiMegaphone,
  HiOutlineBell,
  HiShoppingBag,
  HiUsers
} from 'react-icons/hi2';
import { HiMiniSquaresPlus } from 'react-icons/hi2';
import { HiBuildingStorefront } from 'react-icons/hi2';
import { HiClipboardDocumentList } from 'react-icons/hi2';

function DesktopNavBar() {
  return (
    <main className="hidden lg:flex mt-32">
      <header className="w-4/5 primary-background-color text-white flex justify-between items-center px-4 py-4 fixed top-0 right-0">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-400">
            <Image src={Logo} alt="logo" className="bg-cover w-10 h-10" />
          </div>
          <div className="poppins">
            <span className="font-medium">Aaron Ramsey</span>
            <span className="block text-sm">Admin</span>
          </div>
        </div>
        <div className="relative pr-4">
          <HiOutlineBell className="text-[30px]" />
          <div
            className="absolute top-[-12px] right-[8px] text-[10px] bg-white w-[25px] h-[25px] rounded-full 
              text-gray-800 text-center font-bold pt-[5px]"
          >
            10
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="bg-gray-100 fixed top-0 left-0 w-1/5 h-full px-6 text-[12px]">
        <div className="flex items-center gap-3 my-6">
          <div>
            <Image src={Logo} alt="logo" className="bg-cover w-[50px]" />
          </div>
          <div>
            <span className="poppins font-medium text-lg">Mall Admin</span>
          </div>
        </div>
        <nav>
          <ul className="flex flex-col gap-10 mt-20">
            <li>
              <a
                href="/admin/dashboard"
                className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
              >
                <HiHome className="w-6 h-6" />{' '}
                <span className="poppins text-medium text-[14px]">
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="/admin/orders"
                className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
              >
                <HiShoppingBag className="w-6 h-6" />{' '}
                <span className="poppins text-medium text-[14px]">Orders</span>
              </a>
            </li>
            <li>
              <a
                href="/admin/products"
                className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
              >
                <HiMiniSquaresPlus className="w-6 h-6" />{' '}
                <span className="poppins text-medium text-[14px]">
                  Products
                </span>
              </a>
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
                <span className="poppins text-medium text-[14px]">
                  Campaigns
                </span>
              </a>
            </li>
            <li className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500">
              <HiArrowLeftCircle className="w-6 h-6" />{' '}
              <span className="poppins text-medium text-[14px]">Log Out</span>
            </li>
          </ul>
        </nav>
      </aside>
    </main>
  );
}

export default DesktopNavBar;
