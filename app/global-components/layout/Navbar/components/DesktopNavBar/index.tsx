import {
  HiOutlineChevronDown,
  HiOutlineMagnifyingGlass,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineUser
} from 'react-icons/hi2';
import Image from 'next/image';
import Logo from '../../../../../assets/images/logo.jpg';

function DesktopNavBar() {
  return (
    <div className="desktop-nav-bar w-full hidden lg:flex items-center justify-between shadow-sm mt-3 pb-3 lg:px-[10%] xl:px-[12%] lg:mx-auto">
      <div className="flex items-center gap-6">
        <div className="poppins uppercase font-bold text-xl">
          <Image
            src={Logo}
            alt="user-icon"
            className="bg-cover w-[60px] h-[60px]"
          />
        </div>
        <div className="flex items-center justify-center gap-4 w-3/4">
          <div className="search-icon flex items-center bg-white border border-gray-300 rounded-md w-[450px] xl:w-[600px]">
            <HiOutlineMagnifyingGlass className="ml-3 h-6 w-6 text-gray-300 cursor-pointer" />
            <input
              type="text"
              placeholder="Search for products, brands and categories."
              className="bg-transparent outline-none px-4 py-3 font-medium text-black font w-full text-[14px]"
            />
          </div>
          <button className="group bg-[#FCB349] poppins text-black font-normal text-[14px] rounded-md px-5 py-3 transition duration-200 ease-in-out transform hover:scale-105 hover:bg-[#FF9A29]">
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-1">
          <HiOutlineQuestionMarkCircle className="h-6 w-6" />
          <span className="text-[14px]">Help</span>
          <HiOutlineChevronDown className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-1">
          <HiOutlineShoppingCart className="h-6 w-6" />
          <span className="text-[14px]">Cart</span>
        </div>
        <div className="flex items-center gap-1">
          <HiOutlineUser className="h-6 w-6" />
          <span className="text-[14px]">Account</span>
          <HiOutlineChevronDown className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default DesktopNavBar;
