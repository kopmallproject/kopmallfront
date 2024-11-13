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
      <nav className="poppins hidden lg:block w-1/4 h-1/2 bg-white shadow-sm rounded-md">
        <ul className="flex flex-col  text-lg font-medium">
          <div className="text-[10px] flex items-center gap-2 px-4 py-2 hover:bg-[#D7D7D780]  cursor-pointer">
            <HiOutlineUser />
            <Link
              href="/user-account/123"
              className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105"
            >
              my account
            </Link>
          </div>
          <div className="text-[10px] flex items-center gap-2 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer">
            <HiOutlineGift />
            <Link
              href="/user-account/active-orders/123"
              className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105"
            >
              Orders
            </Link>
          </div>
          <div className="text-[10px] flex items-center gap-2 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer">
            <HiOutlineHeart />
            <Link
              href="/user-account/saved-items/123"
              className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105"
            >
              Saved Items
            </Link>
          </div>
          <div className="text-[10px] flex items-center gap-2 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer">
            <HiOutlineFolderOpen />
            <Link
              href="/user-account/address-book/123"
              className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105"
            >
              Address Book
            </Link>
          </div>
          <div className="text-[10px] flex items-center gap-2 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer border-b">
            <HiOutlineBanknotes />
            <li className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105">
              wallet
            </li>
          </div>
          <div className="text-[10px] flex items-center justify-center gap-2 px-4 py-2  hover:bg-[#D7D7D780] cursor-pointer text-[#FCB349]">
            <HiMiniArrowRightStartOnRectangle />
            <li className="capitalize poppins transition duration-200 ease-in-out transform hover:scale-105">
              Log out
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
