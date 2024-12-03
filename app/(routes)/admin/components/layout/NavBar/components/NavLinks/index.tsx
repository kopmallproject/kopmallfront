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
import { useRouter } from 'next/navigation';
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
          <li onClick={handleNavToggle}>
            <a
              href="/admin"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiHome className="w-6 h-6" />{' '}
              <span className="poppins text-medium">Admin Home</span>
            </a>
          </li>
          <li onClick={handleNavToggle}>
            <Link
              href="/admin/orders"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiShoppingBag className="w-6 h-6" />{' '}
              <span className="poppins text-medium">Orders</span>
            </Link>
          </li>
          <li onClick={handleNavToggle}>
            <Link
              href="/admin/products"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiMiniSquaresPlus className="w-6 h-6" />{' '}
              <span className="poppins text-medium">Products</span>
            </Link>
          </li>
          <li onClick={handleNavToggle}>
            <a
              href="/admin/categories"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiMiniViewColumns className="w-6 h-6" />
              <span className="poppins text-medium">Categories</span>
            </a>
          </li>
          <li onClick={handleNavToggle}>
            <a
              href="/admin/users"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiUsers className="w-6 h-6" />{' '}
              <span className="poppins text-medium">Users</span>
            </a>
          </li>
          <li onClick={handleNavToggle}>
            <a
              href="/admin/stores"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiBuildingStorefront className="w-6 h-6" />{' '}
              <span className="poppins text-medium">Stores</span>
            </a>
          </li>
          <li onClick={handleNavToggle}>
            <a
              href="/admin/deals"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiClipboardDocumentList className="w-6 h-6" />{' '}
              <span className="poppins text-medium">Deals</span>
            </a>
          </li>
          <li onClick={handleNavToggle}>
            <a
              href="/admin/campaigns"
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiMegaphone className="w-6 h-6" />{' '}
              <span className="poppins text-medium">Campaigns</span>
            </a>
          </li>

          <li onClick={handleNavToggle}>
            <div
              onClick={handleLogoutClick}
              className="flex items-center space-x-4 cursor-pointer hover:text-blue-500 active:text-blue-500"
            >
              <HiArrowLeftCircle className="w-6 h-6" />{' '}
              <span className="poppins text-medium">Log Out</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default NavLinks;
