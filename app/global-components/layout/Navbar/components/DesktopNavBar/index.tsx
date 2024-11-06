import {
  HiOutlineChevronDown,
  HiOutlineMagnifyingGlass,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineUser
} from 'react-icons/hi2';

function DesktopNavBar() {
  return (
    <div className="desktop-nav-bar w-full hidden lg:flex items-center justify-between shadow-sm mt-4 pb-10 lg:px-[5%] lg:mx-auto">
      <div className="flex items-center w-full gap-6">
        <h3 className="poppins uppercase font-bold text-xl">kop mall</h3>
        <div className="flex items-center justify-center gap-4 w-3/4">
          <div className="search-icon flex items-center bg-white border border-gray-300 rounded-md w-full p-2">
            <HiOutlineMagnifyingGlass className="h-8 w-8 text-gray-300 cursor-pointer" />
            <input
              type="text"
              placeholder="Search for products, brands and categories."
              className="bg-transparent outline-none px-4 py-2 font-medium text-black font w-full text-sm"
            />
          </div>
          <div>
            <button className="group bg-[#FCB349] poppins text-black font-semibold text-lg rounded-md px-5 py-2 transition duration-200 ease-in-out transform hover:scale-105 hover:bg-[#FF9A29]">
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <HiOutlineQuestionMarkCircle className="h-6 w-6" />
          <span>help</span>
          <HiOutlineChevronDown className="h-6 w-6" />
        </div>
        <div className="flex items-center gap-1">
          <HiOutlineShoppingCart className="h-6 w-6" />
          <span>Cart</span>
        </div>
        <div className="flex items-center gap-1">
          <HiOutlineUser className="h-6 w-6" />
          <span>Account</span>
          <HiOutlineChevronDown className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default DesktopNavBar;
