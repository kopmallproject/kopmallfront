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
    <nav className="bg-glass_light lg:hidden fixed top-0 left-0 right-0 min-h-screen z-30 bg-white">
      <div className="flex flex-col">
        <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] mt-4 ml-3">
          <HiOutlineXMark
            onClick={handleNavToggle}
            className="w-6 h-6 text-black"
          />
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
              <Link className="border-r border-b" href="/">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780]">
                  <HiOutlineGift className="text-[20px]" />
                  <span className="text-[14px] font-normal poppins">
                    Orders
                  </span>
                </div>
              </Link>
              <Link className="border-b" href="/">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780]">
                  <HiOutlineHeart className="text-[20px]" />
                  <span className="text-[14px] font-normal poppins">
                    Saved items
                  </span>
                </div>
              </Link>
              <Link className="border-r" href="/">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780]">
                  <HiOutlineFolderOpen className="text-[20px]" />
                  <span className="text-[14px] font-normal poppins">
                    Address book
                  </span>
                </div>
              </Link>
              <Link href="/">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780]">
                  <HiOutlineBanknotes className="text-[20px]" />
                  <span className="text-[14px] font-normal poppins">
                    Wallet
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <ul className="flex flex-col border-t">
            <h3 className="poppins text-lg font-semibold uppercase px-4 pt-4">
              categories
            </h3>
            <div className="flex flex-col mt-4">
              <div className="flex items-center justify-between gap-3 border-b py-3 border-t font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Phones and tablets</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Appliances</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Computing</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Wearable Tech</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Supermarket</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Cameras</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Gaming</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Land & Properties</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Automobiles</li>
                <HiChevronRight className="text-[20px]" />
              </div>
              <div className="flex items-center justify-between gap-3 border-b py-3 font-normal text-[14px] px-3">
                <li className="cursor-pointer poppins">Other Categories</li>
                <HiChevronRight className="text-[20px]" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
