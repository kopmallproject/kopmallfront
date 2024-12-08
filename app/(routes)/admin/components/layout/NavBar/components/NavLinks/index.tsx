'use client';

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
import { usePathname, useRouter } from 'next/navigation'; // Use usePathname
import { useAppDispatch } from '@/app/rtk-base/hooks';
import { showModal } from '@/app/rtk-base/slices/modal-slice';
import Logo from '@/app/assets/images/logo.png';

import { HiMiniSquaresPlus } from 'react-icons/hi2';
import { HiBuildingStorefront } from 'react-icons/hi2';
import { HiClipboardDocumentList } from 'react-icons/hi2';
import { HiMiniViewColumns } from 'react-icons/hi2';

type NavLinksProps = {
  handleNavToggle: () => void;
};

function NavLinks({ handleNavToggle }: NavLinksProps) {
  const dispatch = useAppDispatch();
  const pathname = usePathname(); // Get the current path
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

  const navItems = [
    {
      href: '/admin',
      label: 'Admin Home',
      icon: <HiHome className="w-6 h-6" />
    },
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
              <div className="font-medium mb-1">Aaron Ramsey</div>
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
        <ul className="flex flex-col gap-10 mt-12 px-4 text-[12px]">
          {navItems.map((item) => (
            <li key={item.href} onClick={handleNavToggle}>
              <Link
                href={item.href}
                className={`flex items-center space-x-4 cursor-pointer ${
                  pathname === item.href
                    ? 'text-[#fcb349] font-bold'
                    : 'hover:text-[#fcb349]'
                }`}
              >
                {item.icon}
                <span className="poppins text-medium">{item.label}</span>
              </Link>
            </li>
          ))}
          <li onClick={handleNavToggle}>
            <div
              onClick={handleLogoutClick}
              className="flex items-center space-x-4 cursor-pointer hover:text-[#fcb349] active:text-[#fcb349]"
            >
              <HiArrowLeftCircle className="w-6 h-6" />
              <span className="poppins text-medium">Log Out</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavLinks;
