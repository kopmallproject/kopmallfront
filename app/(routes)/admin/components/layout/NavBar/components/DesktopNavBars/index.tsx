'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  HiArrowLeftCircle,
  HiHome,
  HiMegaphone,
  HiOutlineBell,
  HiShoppingBag,
  HiUsers,
  HiMiniSquaresPlus,
  HiBuildingStorefront,
  HiClipboardDocumentList,
  HiMiniViewColumns,
  HiMagnifyingGlass
} from 'react-icons/hi2';
import { useAppDispatch } from '@/app/rtk-base/hooks';
import { showModal } from '@/app/rtk-base/slices/modal-slice';
import { useState } from 'react';
import Logo from '@/app/assets/images/logo.png';

type NavItem = {
  href: string;
  label: string;
  icon: JSX.Element;
};

const navItems: NavItem[] = [
  { href: '/admin', label: 'Admin Home', icon: <HiHome className="w-6 h-6" /> },
  {
    href: '/admin/orders',
    label: 'Orders',
    icon: <HiShoppingBag className="w-6 h-6" />
  },
  {
    href: '/admin/products',
    label: 'Products',
    icon: <HiMiniSquaresPlus className="w-6 h-6" />
  },
  {
    href: '/admin/categories',
    label: 'Categories',
    icon: <HiMiniViewColumns className="w-6 h-6" />
  },
  {
    href: '/admin/users',
    label: 'Users',
    icon: <HiUsers className="w-6 h-6" />
  },
  {
    href: '/admin/stores',
    label: 'Stores',
    icon: <HiBuildingStorefront className="w-6 h-6" />
  },
  {
    href: '/admin/deals',
    label: 'Deals/Campaigns',
    icon: <HiClipboardDocumentList className="w-6 h-6" />
  },
  {
    href: '/admin/notifications',
    label: 'Notifications',
    icon: <HiMegaphone className="w-6 h-6" />
  }
];

function DesktopNavBar() {
  const pathname = usePathname(); // Use usePathname to get the current path
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogoutClick = () => {
    dispatch(
      showModal({
        title: 'Confirm Logout',
        message: 'Are you sure you want to log out?',
        onConfirm: () => {
          router.push('/log-in');
        },
        onCancel: () => {
          console.log('Logout canceled');
        }
      })
    );
  };

  return (
    <main className="hidden lg:flex">
      <header className="w-4/5 primary-background-color text-white flex justify-between items-center px-4 py-2 fixed top-0 right-0">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-slate-400">
            <Image
              src={Logo}
              alt="logo"
              width={50}
              height={50}
              className="bg-cover w-10 h-10"
            />
          </div>
          <div className="poppins">
            <span className="font-medium text-[14px]">Aaron Ramsey</span>
            <span className="block text-[12px]">Admin</span>
          </div>
        </div>
        <section className="flex items-center">
          <div className="relative pr-8">
            <HiMagnifyingGlass className="text-[25px]" />
          </div>
          <Link href="/admin/notifications" className="relative pr-4">
            <HiOutlineBell className="text-[30px]" />
            <div
              className="absolute top-[-7px] right-[12px] text-[12px] bg-white w-[20px] h-[20px] rounded-full 
              text-gray-800 text-center font-medium poppins flex items-center justify-center"
            >
              10
            </div>
          </Link>
        </section>
      </header>

      {/* Sidebar */}
      <aside className="bg-gray-100 fixed top-0 left-0 w-1/5 h-full px-6 text-[12px]">
        <div className="flex items-center gap-3 my-3">
          <Link href="/">
            <Image
              width={50}
              height={50}
              src={Logo}
              alt="logo"
              className="bg-cover w-[50px]"
            />
          </Link>
          <div>
            <span className="poppins font-medium text-lg">Mall Admin</span>
          </div>
        </div>
        <nav className="nav-links">
          <ul className="flex flex-col gap-10 mt-20">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center space-x-4 cursor-pointer ${
                    pathname === item.href
                      ? 'text-[#fcb349]'
                      : 'hover:text-[#fcb349]'
                  }`}
                >
                  {item.icon}
                  <span className="poppins text-medium text-[14px]">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
            <li
              onClick={handleLogoutClick}
              className={`flex items-center space-x-4 cursor-pointer hover:text-[#fcb349] active:text-[#fcb349]`}
            >
              <HiArrowLeftCircle className="w-6 h-6" />
              <span className="poppins text-medium text-[14px]">Log Out</span>
            </li>
          </ul>
        </nav>
      </aside>
    </main>
  );
}

export default DesktopNavBar;
