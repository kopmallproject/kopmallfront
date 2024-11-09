import {
  HiOutlineXMark,
  HiOutlineGift,
  HiOutlineHeart,
  HiOutlineBanknotes,
  HiOutlineFolderOpen,
  HiDevicePhoneMobile,
  HiComputerDesktop,
  HiDeviceTablet,
  HiOutlineCamera,
  HiMiniHome,
  HiOutlineTruck,
  HiOutlineEllipsisHorizontalCircle
} from 'react-icons/hi2';
import { IoWatchOutline } from 'react-icons/io5';
import { CiApple } from 'react-icons/ci';
import { GiGamepad } from 'react-icons/gi';
import Link from 'next/link';
import { HiChevronRight } from 'react-icons/hi2';

type NavLinksProps = {
  handleNavToggle: () => void;
};

function NavLinks({ handleNavToggle }: NavLinksProps) {
  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 min-h-screen z-30 bg-white">
      <div className="flex flex-col min-h-screen relative h-[500px] overflow-y-auto pb-[100px]">
        <div className="w-[40px] h-[40px] mt-4 ml-3 border rounded-full">
          <div className="flex items-center justify-center w-[40px] h-[40px] translate-x-[-1px] translate-y-[-1px]">
            <HiOutlineXMark
              onClick={handleNavToggle}
              className="w-6 h-6 text-black"
            />
          </div>
        </div>
        <div className="mt-8">
          <div className="px-3 flex justify-between gap-3 border-b pb-6">
            <Link
              className="w-1/2 font-normal border border-[#FCB349] rounded-[7px] px-3 py-3 text-[12px] poppins text-center"
              href="/log-in"
            >
              Log in
            </Link>
            <Link
              className="w-1/2 font-normal border border-[#FCB349] rounded-[7px] px-3 py-3 text-[12px] poppins text-center"
              href="/sign-up"
            >
              Sign up
            </Link>
          </div>
          <div className="flex flex-col">
            {/* <div className="px-4 py-2 hover:bg-[#D7D7D780]">
              <li className="capitalize poppins">my account</li>
            </div> */}
            <div className="grid grid-cols-2">
              <Link
                className="border-r border-b"
                href="/user-account/active-orders"
              >
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full">
                  <HiOutlineGift className="text-[20px]" />
                  <span className="text-[14px] font-light poppins">Orders</span>
                </div>
              </Link>
              <Link className="border-b" href="/user-account/saved-items">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full">
                  <HiOutlineHeart className="text-[20px]" />
                  <span className="text-[14px] font-light poppins">
                    Saved items
                  </span>
                </div>
              </Link>
              <Link className="border-r" href="/user-account/address-book">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full">
                  <HiOutlineFolderOpen className="text-[20px]" />
                  <span className="text-[14px] font-light poppins">
                    Address book
                  </span>
                </div>
              </Link>
              <Link href="/user-account/my-account">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full">
                  <HiOutlineBanknotes className="text-[20px]" />
                  <span className="text-[14px] font-light poppins">Wallet</span>
                </div>
              </Link>
            </div>
          </div>
          <ul className="flex flex-col border-t">
            <h3 className="poppins text-lg font-semibold uppercase px-4 pt-4">
              categories
            </h3>
            <div className="flex flex-col mt-4">
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 border-t font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">
                  Phones and tablets
                </span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">Appliances</span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">Computing</span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">Wearable Tech</span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">Supermarket</span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">Cameras</span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">Gaming</span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">
                  Land & Properties
                </span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">Automobiles</span>
                <HiChevronRight className="text-[20px]" />
              </Link>
              <Link
                href="/categories/123"
                className="flex items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3"
              >
                <span className="cursor-pointer poppins">Other Categories</span>
                <HiChevronRight className="text-[20px]" />
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
