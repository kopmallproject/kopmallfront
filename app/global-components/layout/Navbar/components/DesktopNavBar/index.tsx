'use client';
import {
  HiOutlineChevronDown,
  HiOutlineMagnifyingGlass,
  HiOutlineQuestionMarkCircle,
  HiOutlineShoppingCart,
  HiOutlineUser
} from 'react-icons/hi2';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';
// import Logo from '@/app/assets/images/brand-image.png';
import Image1 from '@/app/assets/images/img-41.png';
import Image2 from '@/app/assets/images/img-42.png';
import Image3 from '@/app/assets/images/img-43.png';
import Image4 from '@/app/assets/images/img-44.png';
import Image5 from '@/app/assets/images/img-45.png';
import Image6 from '@/app/assets/images/img-46.png';
import Link from 'next/link';
// import { categories } from '@/app/data/category-list';

const categories = [
  {
    categoryName: 'Phones',
    categoryImage: Image1
  },
  {
    categoryName: 'Computers',
    categoryImage: Image2
  },
  {
    categoryName: 'Smart Watches',
    categoryImage: Image3
  },
  {
    categoryName: 'Cameras',
    categoryImage: Image4
  },
  {
    categoryName: 'Headphones',
    categoryImage: Image5
  },
  {
    categoryName: 'Gaming',
    categoryImage: Image6
  },
  {
    categoryName: 'Home Appliances',
    categoryImage: Image4
  },
  {
    categoryName: 'Furniture',
    categoryImage: Image5
  },
  {
    categoryName: 'Clothes And Apparels',
    categoryImage: Image6
  }
];

function DesktopNavBar() {
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full">
      <div className="desktop-nav-bar w-full hidden bg-gray-100 lg:flex items-center justify-between shadow-sm py-[6px] px-3 lg:px-[10%] xl:px-[12%] lg:mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex flex-row gap-4 items-center">
            <div className="poppins uppercase text-xl">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[45px] h-[45px]"
              />
            </div>
            <div className="hidden flex-col poppins font-extralight text-[18px]">
              <span>King Of Pi</span>
              <span>Mall</span>
            </div>
          </Link>
          <div className="flex items-center justify-center gap-4 w-3/4">
            <div className="search-icon flex items-center bg-white border border-gray-300 rounded-md w-[450px] xl:w-[500px] 2xl:w-[600px]">
              <HiOutlineMagnifyingGlass className="ml-3 h-6 w-6 text-gray-300 cursor-pointer" />
              <input
                type="text"
                placeholder="Search for products, brands and categories."
                className="bg-transparent outline-none px-4 py-[10px] font-medium text-black font w-full text-[14px]"
              />
            </div>
            <button className="group bg-[#FCB349] poppins text-black font-normal text-[14px] rounded-md px-5 py-[10px] transition duration-200 ease-in-out transform hover:scale-105 hover:bg-[#FF9A29]">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8 2xl:gap-12">
          <div
            onClick={scrollToFooter}
            className="flex items-center gap-1 cursor-pointer"
          >
            <HiOutlineQuestionMarkCircle className="h-6 w-6" />
            <span className="text-[14px]">Help</span>
            <HiOutlineChevronDown className="h-4 w-4" />
          </div>
          <Link href="/cart/123" className="cursor-pointer">
            <div className="flex gap-4 items-center">
              <div className="relative">
                <HiOutlineShoppingCart className="h-6 w-6" />
                <div
                  className="cart-item-counter bg-green-600 text-white absolute w-[20px] 
                h-[20px] rounded-full text-[10px] flex items-center justify-center top-[-9px] right-[-10px]"
                >
                  12
                </div>
              </div>
              <div className="poppins text-[14px]">Cart</div>
            </div>
          </Link>
          <Link
            href="/user-account/123"
            className="flex items-center gap-1 cursor-pointer"
          >
            <HiOutlineUser className="h-6 w-6" />
            <span className="text-[14px]">Account</span>
            <HiOutlineChevronDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="px-3 lg:px-[10%] xl:px-[12%] lg:mx-auto hidden lg:flex border-b-[1px]">
        <div className="w-full poppins font-normal bg-white primary-text-color py-[7px] flex flex-row items-center">
          <div className="flex gap-3 items-center w-[150px]">
            <HiBars3BottomLeft
              // onClick={handleNavToggle}
              className="h-7 w-7 cursor-pointer font-semibold"
            />
            <span className="text-[13px] font-medium w-full">
              All Categories
            </span>
          </div>
          {/* rendering same thing twice and slicing to reduce the array elements due to responsiveness issues */}
          <div className="hidden lg:flex 2xl:hidden items-center justify-evenly w-[85%]">
            {/* <div className="flex items-center justify-evenly w-[85%] overflow-x-auto"> */}
            {categories.slice(0, 5).map((category) => {
              return (
                <div
                  className="text-[13px] gap-6 font-normal items-center"
                  key={category.categoryName}
                >
                  {/* <div>
                  <Image
                    src={category.categoryImage}
                    alt="user-icon"
                    className="bg-cover w-[20px] h-[20px]"
                  />
                </div> */}
                  <div className="w-[150px] text-center">
                    {category.categoryName}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden 2xl:flex items-center justify-evenly w-[85%]">
            {/* <div className="flex items-center justify-evenly w-[85%] overflow-x-auto"> */}
            {categories.slice(0, 6).map((category) => {
              return (
                <div
                  className="text-[13px] gap-6 font-normal items-center"
                  key={category.categoryName}
                >
                  {/* <div>
                  <Image
                    src={category.categoryImage}
                    alt="user-icon"
                    className="bg-cover w-[20px] h-[20px]"
                  />
                </div> */}
                  <div className="w-[150px] text-center">
                    {category.categoryName}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DesktopNavBar;
