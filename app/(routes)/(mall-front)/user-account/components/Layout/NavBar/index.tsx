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
      <nav className="poppins hidden lg:block w-1/4 self-start bg-white rounded-[7px]">
        <ul className="flex flex-col text-lg">
          <Link
            href="/user-account/123"
            className="text-[10px] flex items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780]  cursor-pointer"
          >
            <HiOutlineUser className="text-[22px]" />
            <div className="capitalize poppins text-[12px] transition duration-200 ease-in-out transform hover:scale-105">
              my account
            </div>
          </Link>
          <Link
            href="/user-account/orders/123"
            className="text-[10px] flex items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer"
          >
            <HiOutlineGift className="text-[22px]" />
            <div className="capitalize poppins text-[12px] transition duration-200 ease-in-out transform hover:scale-105">
              Orders
            </div>
          </Link>
          <Link
            href="/user-account/saved-items/123"
            className="text-[10px] flex items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer"
          >
            <HiOutlineHeart className="text-[22px]" />
            <div className="capitalize poppins text-[12px] transition duration-200 ease-in-out transform hover:scale-105">
              Saved Items
            </div>
          </Link>
          <Link
            href="/user-account/address-book/123"
            className="text-[10px] flex items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer"
          >
            <HiOutlineFolderOpen className="text-[22px]" />
            <div className="capitalize poppins text-[12px] transition duration-200 ease-in-out transform hover:scale-105">
              Address Book
            </div>
          </Link>
          <div className="text-[10px] hidden items-center gap-4 px-4 py-2 hover:bg-[#D7D7D780] cursor-pointer border-b">
            <HiOutlineBanknotes className="text-[22px]" />
            <div className="capitalize poppins text-[12px] font-normal transition duration-200 ease-in-out transform hover:scale-105">
              wallet
            </div>
          </div>
          <div className="primary-background-color rounded-br-[7px] rounded-bl-[7px] text-[10px] flex items-center justify-center gap-4 px-4 py-2 cursor-pointer text-[#FCB349]">
            <HiMiniArrowRightStartOnRectangle className="text-[22px]" />
            <div className=" capitalize poppins text-[12px] font-normal transition duration-200 ease-in-out transform hover:scale-105">
              Log out
            </div>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
