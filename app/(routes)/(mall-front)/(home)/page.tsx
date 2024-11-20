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
import { HiChevronRight } from 'react-icons/hi2';
import { HiMiniShoppingBag } from 'react-icons/hi2';
import Footer from '@/app/global-components/layout/Footer';
import NavBar from '@/app/global-components/layout/Navbar';
import TopNav from '@/app/global-components/layout/TopNav';

function Home() {
  return (
    <>
      <TopNav />
      <main>
        <NavBar />
        <div className="min-h-screen bg-gray-100 lg:bg-black px-3 sm:px-[20px] md:px-[5%] lg:px-[10%] xl:px-[12%] 2xl:px-[17%] md:mx-auto text-[14px]">
          <main className="min-h-screen pt-6 ">
            <section className="first-section flex flex-col xl:flex-row gap-y-[20px] justify-between">
              <div className="w-full xl:w-[62%] xl:h-[400px]">
                <Image
                  src={DummyBanner1}
                  alt="user-icon"
                  className="w-full rounded-[7px] xl:h-[400px]"
                />
              </div>
              <div className="w-full xl:w-[35.5%] grid grid-cols-4 xl:grid-cols-2 gap-[20px] top-category-menu text-white xl:h-[400px]">
                <div className="xl:h-[190px]">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full xl:h-[190px] rounded-[7px]"
                  />
                </div>
                <div className="xl:h-[190px]">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full xl:h-[190px] rounded-[7px]"
                  />
                </div>
                <div className="xl:h-[190px]">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full xl:h-[190px] rounded-[7px]"
                  />
                </div>
                <div className="xl:h-[190px]">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full xl:h-[190px] rounded-[7px]"
                  />
                </div>
              </div>
            </section>
            <section className="mt-[20px] p-3 bg-white rounded-[7px] w-full grid grid-cols-3 xl:grid-cols-6 gap-[20px] top-category-menu">
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Up to 20% Off
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  TV & Audio deals
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Phone & tablet deals
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Appliance deals
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Amazing Discounts
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Clearance Sales
                </span>
              </div>
            </section>
            <section className="flash-sale-section bg-white mt-[20px] rounded-[7px] pb-2">
              <div className="main-header-wrapper bg-red-600 py-2 rounded-tl-[7px] rounded-tr-[7px] text-white px-3 border-b-[1px] flex flex-row justify-between items-center">
                <div className="flex">
                  <div className="flex gap-2 items-center">
                    <HiMiniShoppingBag className="secondary-text-color text-[25px] xsm:text-[30px]" />
                    <div className="flex flex-col gap-1">
                      <h3 className="poppins font-normal xsm:mt-0 text-[14px] flex items-center">
                        {/* <h3 className="poppins font-light before:w-[3px] before:h-[54px] before:sm:h-[61px] before:rounded-tl-[7px] before:mr-[15px] before:secondary-background-color before:inline-block text-2xl sm:text-3xl flex items-center"> */}
                        Flash Sales
                      </h3>
                      <h2 className="poppins font-light text-[12px] xsm:text-[14px] flex flex-col xsm:flex-row xsm:items-center gap-1 xsm:gap-2">
                        <span>Time Left: </span>
                        <span className="font-normal"> 00h : 18m : 49s</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                  <div className="text-center">See all items</div>
                  <div>
                    <HiChevronRight className="text-[16px] font-bold" />
                  </div>
                </div>
              </div>
              <div className="flash-sales-products p-3 flex gap-5 w-[100%] overflow-x-auto">
                {products.map((product) => {
                  return <ProductCard {...product} key={product.productName} />;
                })}
              </div>
              {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
            </section>
            <section className="mt-[20px] p-3 bg-white rounded-[7px] w-full grid grid-cols-3 xl:grid-cols-6 gap-[20px] top-category-menu">
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Up to 20% Off
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  TV & Audio deals
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Phone & tablet deals
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Appliance deals
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Amazing Discounts
                </span>
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src={DummyBanner2}
                  alt="user-icon"
                  className="w-full rounded-[7px]"
                />
                <span className="poppins text-[12px] sm:text-[14px] font-normal text-center">
                  Clearance Sales
                </span>
              </div>
            </section>
            <section className="sponsored-products-section bg-white mt-[20px] rounded-[7px] pb-2">
              <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
                <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                  Sponsored Products
                </h3>
                <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                  <div className="text-center">See all items</div>
                  <div>
                    <HiChevronRight className="text-[16px] font-bold" />
                  </div>
                </div>
              </div>
              <div className="products p-3 flex gap-5 w-[100%] overflow-x-auto">
                {products.map((product) => {
                  return <ProductCard {...product} key={product.productName} />;
                })}
              </div>
              {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
            </section>
            <section className="best-selling w-full mt-[20px] sm:mt-20px]">
              <Image
                src={DummyBanner3}
                alt="user-icon"
                className="w-full rounded-[7px]"
              />
            </section>
            {/* <section className="new-arrivals-section mt-[20px] sm:mt-[20px]">
          <div className="main-header-wrapper py-4 px-3 border-b-[1px] flex flex-row justify-between items-center">
            <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
              New Arrivals
            </h3>
            <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
              <div className="text-center">See all items</div>
              <div>
                <HiChevronRight className="text-[16px] font-bold" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-x-6 gap-y-4">
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
        </section> */}
            <section className="mt-[20px] bg-white rounded-[7px] w-full">
              <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
                <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                  Top Phone deals
                </h3>
                <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                  <div className="text-center">See all items</div>
                  <div>
                    <HiChevronRight className="text-[16px] font-bold" />
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[20px] p-3">
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
              </div>
            </section>
            <section className="mt-[20px] bg-white rounded-[7px] w-full">
              <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
                <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                  Accessories deals
                </h3>
                <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                  <div className="text-center">See all items</div>
                  <div>
                    <HiChevronRight className="text-[16px] font-bold" />
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[20px] p-3">
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src={DummyBanner2}
                    alt="user-icon"
                    className="w-full rounded-[7px]"
                  />
                </div>
              </div>
            </section>
            <section className="sponsored-products-section bg-white mt-[20px] rounded-[7px] pb-2">
              <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
                <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                  Binatone Store
                </h3>
                <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                  <div className="text-center">See all items</div>
                  <div>
                    <HiChevronRight className="text-[16px] font-bold" />
                  </div>
                </div>
              </div>
              <div className="products p-3 flex gap-5 w-[100%] overflow-x-auto">
                {products.map((product) => {
                  return <ProductCard {...product} key={product.productName} />;
                })}
              </div>
              {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
            </section>
            <section className="official-stores-section mt-[20px] bg-white rounded-[7px]">
              <div className="flash-sales-countdown-section-wrapper border-b px-3 py-2">
                <h3 className="capitalize poppins text-[14px] xsm:text-[16px] sm:text-[20px] sm:text-center w-full">
                  Official Stores
                </h3>
              </div>
              <div className="official-store-listings gap-6 lg:gap-y-8 grid grid-cols-4 md:grid-cols-6 p-3">
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
            <section className="best-discount-section bg-white mt-[20px] rounded-[7px] pb-2">
              <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
                <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                  Best Discounts(up to 60% off)
                </h3>
                <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                  <div className="text-center">See all items</div>
                  <div>
                    <HiChevronRight className="text-[16px] font-bold" />
                  </div>
                </div>
              </div>
              <div className="products p-3 gap-5 w-[100%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {products.map((product) => {
                  return (
                    <FlexibleWidthProductCard
                      {...product}
                      key={product.productName}
                    />
                  );
                })}
              </div>
              {/* <div className="flex items-center justify-center mt-[20px] px-3 pb-3">
            <button className="w-full rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              See All Items
            </button>
          </div> */}
            </section>
            <section className="platform-offerings-section mt-[20px] pb-[100px]">
              <section className="flex flex-col gap-y-10 sm:gap-y-20 sm:flex-row flex-wrap bg-white px-4 py-8 rounded-[7px]">
                <div className="flex flex-col items-center justify-center w-[75%] sm:w-[48%] lg:w-[30%] mx-auto">
                  <Image
                    src={OfferingsImage2}
                    alt="user-icon"
                    className="w-[50px] sm:w-[65px]"
                  />
                  <div className="mt-3 poppins font-normal text-[12px] sm:text-[14px] uppercase text-center">
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
                  <div className="mt-3 poppins font-normal text-[12px] sm:text-[14px] uppercase text-center">
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
                  <div className="mt-3 poppins font-normal text-[12px] sm:text-[14px] uppercase text-center">
                    Money back guaranteed
                  </div>
                  <div className="mt-1 text-[12px] sm:text-[14px] text-center">
                    All refunds within 30 days after filling a report
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-y-6 sm:flex-row sm:justify-between mt-[20px] bg-white p-3 rounded-[7px]">
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
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
