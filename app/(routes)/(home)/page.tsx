'use client';

import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import Image from 'next/image';
import DummyBanner1 from '@/app/assets/images/img-8.png';
import DummyBanner2 from '@/app/assets/images/img-9.png';
import DummyBanner3 from '@/app/assets/images/img-20.png';
import DummyBanner4 from '@/app/assets/images/img-21.png';
import DummyBanner5 from '@/app/assets/images/img-22.png';
import DummyBanner6 from '@/app/assets/images/img-23.png';
import OfferingsImage1 from '@/app/assets/images/img-36.png';
import OfferingsImage2 from '@/app/assets/images/img-37.png';
import OfferingsImage3 from '@/app/assets/images/img-38.png';
import BannerX from '@/app/assets/images/img-39.png';
import BannerY from '@/app/assets/images/img-40.png';

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
import dummyProduct from '@/app/assets/images/img-10.png';
import { Rating } from 'react-simple-star-rating';
import ProductCard from './components/ProductCard';
import FlexibleWidthProductCard from './components/FlexibleWidthProductCard';
import { HiOutlineArrowLeft } from 'react-icons/hi2';
import { HiOutlineArrowRight } from 'react-icons/hi2';
import { products } from '@/app/data/products-list';
import { categories } from '@/app/data/category-list';
import { officialStores } from '@/app/data/official-stores';

function Home() {
  return (
    <MainAppLayout>
      <main className="min-h-screen mt-4">
        <section className="menu-with-voucher-section flex flex-col lg:flex-row gap-y-[20px] justify-between">
          <div className="w-full lg:w-[70%]">
            <Image
              src={DummyBanner1}
              alt="user-icon"
              className="w-full rounded-[7px]"
            />
          </div>
          <div className="lg:w-[25.5%] top-category-menu text-white">
            <Image
              src={DummyBanner2}
              alt="user-icon"
              className="w-full rounded-[7px]"
            />
          </div>
        </section>
        <section className="flash-sale-section mt-[50px]">
          <div className="main-header-wrapper flex flex-row justify-between items-center">
            <h3 className="before:w-[3px] before:h-[50px] before:mr-[15px] before:secondary-background-color before:inline-block poppins font-normal text-2xl sm:text-3xl secondary-text-color flex items-center">
              Flash Sales
            </h3>
            <div className="page-navigators flex flex-row gap-3 sm:gap-6 items-center">
              <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] primary-background-color">
                <HiOutlineArrowLeft
                  // onClick={handleNavToggle}
                  className="w-5 h-5 text-white"
                />
              </div>
              <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] primary-background-color">
                <HiOutlineArrowRight
                  // onClick={handleNavToggle}
                  className="w-5 h-5 text-white"
                />
              </div>
            </div>
          </div>
          <div className="flash-sales-countdown-section-wrapper mt-6 flex flex-col xsm:flex-row gap-6">
            {/* <h3 className="poppins text-[20px] sm:text-2xl">Flash Sales</h3> */}
            <div className="flash-sales-countdown flex">
              <div className="flex flex-col gap-y-2 w-[40px] xsm:w-[50px]">
                <span className="text-[12px] sm:text-[14px] poppins text-center">
                  Days
                </span>
                <div className="font-semibold text-xl xsm:text-2xl poppins text-center">
                  03
                </div>
              </div>
              <div className="flex items-center secondary-text-color text-[25px] font-semibold mx-[5px]">
                :
              </div>
              <div className="flex flex-col gap-y-2 w-[50px]">
                <span className="text-[12px] sm:text-[14px] poppins text-center">
                  Hours
                </span>
                <div className="font-semibold text-xl xsm:text-2xl poppins text-center">
                  23
                </div>
              </div>
              <div className="flex items-center secondary-text-color text-[25px] font-semibold mx-[5px]">
                :
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-[12px] sm:text-[14px] poppins">
                  Minutes
                </span>
                <div className="font-semibold text-xl xsm:text-2xl poppins text-center">
                  19
                </div>
              </div>
              <div className="flex items-center secondary-text-color text-[25px] font-semibold mx-[5px]">
                :
              </div>
              <div className="flex flex-col gap-y-2">
                <span className="text-[12px] sm:text-[14px] poppins">
                  Seconds
                </span>
                <div className="font-semibold text-xl xsm:text-2xl poppins text-center">
                  56
                </div>
              </div>
            </div>
          </div>
          <div className="flash-sales-products flex gap-x-5 mt-[25px] overflow-x-auto w-[100%]">
            {products.map((product) => {
              return <ProductCard {...product} key={product.productName} />;
            })}
          </div>
          <div className="flex items-center justify-center mt-[40px] sm:mt-[50px]">
            <button className="min-w-[200px] rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Products
            </button>
          </div>
        </section>
        <section className="best-selling w-full mt-[50px] sm:mt-[80px]">
          <Image
            src={DummyBanner3}
            alt="user-icon"
            className="w-full rounded-[7px]"
          />
        </section>
        <section className="new-arrivals-section mt-[50px] sm:mt-[100px]">
          <div className="main-header-wrapper flex flex-row justify-between items-center">
            <h3 className="before:w-[3px] before:h-[50px] before:mr-[15px] before:secondary-background-color before:inline-block poppins font-normal text-2xl md:text-3xl secondary-text-color flex items-center">
              New arrivals
            </h3>
            {/* <div className="page-navigators flex flex-row gap-3 sm:gap-6 items-center">
              <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] primary-background-color">
                <HiOutlineArrowLeft
                  // onClick={handleNavToggle}
                  className="w-5 h-5 text-white"
                />
              </div>
              <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] primary-background-color">
                <HiOutlineArrowRight
                  // onClick={handleNavToggle}
                  className="w-5 h-5 text-white"
                />
              </div>
            </div> */}
          </div>
          <div className="mt-[20px] flex flex-col md:flex-row gap-x-6 gap-y-4">
            <div className="w-full md:w-1/2">
              <Image
                src={DummyBanner2}
                alt="user-icon"
                className="w-full rounded-[7px]"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="w-full">
                <Image
                  src={DummyBanner4}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
              </div>
              <div className="w-full flex flex-row mt-4 justify-between">
                <Image
                  src={DummyBanner5}
                  alt="user-icon"
                  className="rounded-[7px] w-[48%]"
                />{' '}
                <Image
                  src={DummyBanner6}
                  alt="user-icon"
                  className="rounded-[7px] w-[48%]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="more-products-section mt-[50px]">
          <div className="main-header-wrapper flex flex-row justify-between items-center">
            <h3 className="before:w-[3px] before:h-[50px] before:mr-[15px] before:secondary-background-color before:inline-block poppins font-normal text-2xl sm:text-3xl secondary-text-color flex items-center">
              More Products
            </h3>
            <div className="page-navigators flex flex-row gap-3 sm:gap-6 items-center">
              <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] primary-background-color">
                <HiOutlineArrowLeft
                  // onClick={handleNavToggle}
                  className="w-5 h-5 text-white"
                />
              </div>
              <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] primary-background-color">
                <HiOutlineArrowRight
                  // onClick={handleNavToggle}
                  className="w-5 h-5 text-white"
                />
              </div>
            </div>
          </div>
          {/* <div className="flash-sales-countdown-section-wrapper mt-6 flex flex-col xsm:flex-row gap-6">
            <h3 className="poppins text-[20px] sm:text-2xl">
              Explore Endlessly
            </h3>
          </div> */}
          <div className="flash-sales-products gap-x-5 gap-y-6 mt-[25px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-[100%]">
            {products.map((product) => {
              return (
                <FlexibleWidthProductCard
                  {...product}
                  key={product.productName}
                />
              );
            })}
          </div>
          <div className="flex items-center justify-center mt-[40px] sm:mt-[50px]">
            <button className="min-w-[200px] rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Products
            </button>
          </div>
        </section>
        <section className="browse-by-category-section mt-[50px]">
          <div className="main-header-wrapper flex flex-row justify-between items-center">
            <h3 className="before:w-[3px] before:h-[50px] before:mr-[15px] before:secondary-background-color before:inline-block poppins font-normal text-2xl sm:text-3xl secondary-text-color flex items-center">
              Categories
            </h3>
            {/* <div className="page-navigators flex flex-row gap-3 sm:gap-6 items-center">
              <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] primary-background-color">
                <HiOutlineArrowLeft
                  // onClick={handleNavToggle}
                  className="w-5 h-5 text-white"
                />
              </div>
              <div className="flex items-center justify-center border rounded-full w-[40px] h-[40px] primary-background-color">
                <HiOutlineArrowRight
                  // onClick={handleNavToggle}
                  className="w-5 h-5 text-white"
                />
              </div>
            </div> */}
          </div>
          <div className="flash-sales-countdown-section-wrapper mt-6 flex flex-col xsm:flex-row gap-6">
            <h3 className="capitalize poppins text-[20px] sm:text-2xl">
              Browse by category
            </h3>
          </div>
          <div className="category-listings mt-6 sm:mt-10 mb-[50px] flex flex-row lg:justify-center w-full overflow-x-auto gap-4">
            {categories.map((category) => {
              return (
                <div
                  key={category.categoryName}
                  className="w-[120px] h-[120px] p-4 sm:w-[150px] sm:h-[150px] border rounded-[5px] flex flex-col items-center justify-center"
                >
                  <div className="w-[120px] sm:w-[150px] flex justify-center">
                    <Image
                      src={category.categoryImage}
                      alt="user-icon"
                      className="w-[30px] md:w-[40px] rounded-[7px] mt-2"
                    />
                  </div>
                  <div className="category-name poppins font-normal text-[14px] mt-3 text-center">
                    {category.categoryName}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flash-sales-countdown-section-wrapper mt-8 lg:mt-16 flex flex-col xsm:flex-row gap-6">
            <h3 className="capitalize poppins text-[20px] sm:text-2xl sm:text-center w-full">
              Official Stores
            </h3>
          </div>
          <div className="official-store-listings mt-6 sm:mt-10 mb-[50px] gap-6 lg:gap-y-8 grid grid-cols-4 md:grid-cols-6">
            {officialStores.map((store, index) => {
              return (
                <Image
                  key={index} // Use the array index as the key
                  src={store.storeImage}
                  alt="user-icon"
                  className="w-[120px] sm:w-[150px] lg:w-[200px]"
                />
              );
            })}
          </div>
        </section>
        <section className="platform-offerings-section mt-[100px] mb-[100px]">
          <section className="flex flex-col gap-y-10 sm:gap-y-20 sm:flex-row flex-wrap">
            <div className="flex flex-col items-center justify-center w-[75%] sm:w-[48%] lg:w-[30%] mx-auto">
              <Image
                src={OfferingsImage2}
                alt="user-icon"
                className="w-[50px] sm:w-[65px]"
              />
              <div className="mt-3 poppins font-normal text-[12px] sm:text-[14px] uppercase">
                fast and affordable delivery
              </div>
              <div className="mt-1 text-[12px] sm:text-[14px] text-center">
                Round the clock satisfactory delivery on all orders
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[75%] sm:w-[48%] lg:w-[30%] mx-auto">
              <Image
                src={OfferingsImage2}
                alt="user-icon"
                className="w-[50px] sm:w-[65px]"
              />
              <div className="mt-3 poppins font-normal text-[12px] sm:text-[14px] uppercase">
                24/7 customer support
              </div>
              <div className="mt-1 text-[12px] sm:text-[14px] text-center">
                Always count on our friendly 24/7 customer support
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[75%] sm:w-[48%] lg:w-[30%] mx-auto">
              <Image
                src={OfferingsImage3}
                alt="user-icon"
                className="w-[50px] sm:w-[65px]"
              />
              <div className="mt-3 poppins font-normal text-[12px] sm:text-[14px] uppercase">
                Money back guaranteed
              </div>
              <div className="mt-1 text-[12px] sm:text-[14px] text-center">
                All refunds within 30 days after filling a report
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-y-6 sm:flex-row sm:justify-between mt-[50px] md:mt-[100px]">
            <Image
              src={BannerX}
              alt="user-icon"
              className="w-full sm:w-[48%]"
            />
            <Image
              src={BannerY}
              alt="user-icon"
              className="w-full sm:w-[48%]"
            />
          </section>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default Home;
