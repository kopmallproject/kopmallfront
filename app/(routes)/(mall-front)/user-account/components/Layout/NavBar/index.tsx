import Link from 'next/link';
import {
  HiMiniArrowRightStartOnRectangle,
  HiOutlineBanknotes,
  HiOutlineFolderOpen,
  HiOutlineGift,
  HiOutlineHeart,
  HiOutlineUser
} from 'react-icons/hi2';

function NavBar() {
  return (
    <>
      <nav className="poppins hidden lg:block w-1/4 h-1/2 bg-white shadow-sm border-[1px] rounded-md">
        <ul className="flex flex-col text-lg py-2">
          <div className="text-[10px] flex items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780]  cursor-pointer">
            <HiOutlineUser className="text-[22px]" />
            <Link
              href="/user-account/123"
              className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105"
            >
              my account
            </Link>
          </div>
          <div className="text-[10px] flex items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer">
            <HiOutlineGift className="text-[22px]" />
            <Link
              href="/user-account/active-order/123"
              className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105"
            >
              Orders
            </Link>
          </div>
          <div className="text-[10px] flex items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer">
            <HiOutlineHeart className="text-[22px]" />
            <Link
              href="/user-account/saved-items/123"
              className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105"
            >
              Saved Items
            </Link>
          </div>
          <div className="text-[10px] flex items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer">
            <HiOutlineFolderOpen className="text-[22px]" />
            <Link
              href="/user-account/address-book/123"
              className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105"
            >
              Address Book
            </Link>
          </div>
          <div className="text-[10px] flex items-center gap-4 px-4 pt-2 pb-4 hover:bg-[#D7D7D780] cursor-pointer border-b">
            <HiOutlineBanknotes className="text-[22px]" />
            <li className="capitalize poppins text-[14px] font-normal transition duration-200 ease-in-out transform hover:scale-105">
              wallet
            </li>
          </div>
          <div className="text-[10px] flex items-center justify-center gap-4 px-4 py-2  hover:bg-[#D7D7D780] cursor-pointer text-[#FCB349]">
            <HiMiniArrowRightStartOnRectangle className="text-[22px]" />
            <li className="capitalize poppins text-[14px] font-normal transition duration-200 ease-in-out transform hover:scale-105">
              Log out
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
