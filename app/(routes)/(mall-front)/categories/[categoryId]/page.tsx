import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import CategoriesPageProductCard from '../../(home)/components/CategoriesPageProductCard';
import ProductCard from '../../(home)/components/ProductCard';
import SidebarFilter from '../SideBarFilter';
import Image from 'next/image';
import { products } from '@/app/data/products-list';
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
import { HiChevronRight } from 'react-icons/hi2';
import { HiAdjustmentsVertical } from 'react-icons/hi2';
import { HiOutlineFunnel } from 'react-icons/hi2';
import DummyBanner1 from '@/app/assets/images/img-23.png';
import DummyBanner2 from '@/app/assets/images/img-9.png';
import DummyBanner3 from '@/app/assets/images/img-20.png';
import DummyBanner4 from '@/app/assets/images/img-21.png';
import DummyBanner5 from '@/app/assets/images/img-22.png';
import DummyBanner6 from '@/app/assets/images/img-9.png';

function CategoryPage() {
  return (
    <>
      <div
        className="w-full bottom-[35px]
       fixed z-30"
      >
        <div
          className="w-[275px] mx-auto sm:w-[400px] flex lg:hidden filter-sort-wrapper bg-white p-4 
          rounded-[50px] px-3 flex-row items-center primary-background-color
          text-white"
        >
          <div className="w-1/2 border-r-[2px] text-[14px] font-normal flex items-center gap-3 justify-center">
            <div className="text-center poppins">Filter</div>
            <div>
              <HiOutlineFunnel className="text-[18px]" />
            </div>
          </div>
          <div className="w-1/2 poppins text-[12px] xsm:text-[14px] font-normal flex items-center gap-3 justify-center">
            <div className="text-center poppins">Sort</div>
            <div>
              <HiAdjustmentsVertical className="text-[18px]" />
            </div>
          </div>
        </div>
      </div>
      <MainAppLayout>
        <main className="pb-[100px] categories-page">
          <section className="navigation-indicator pt-[20px] mb-5 lg:mb-8 poppins font-normal flex gap-3 items-center text-gray-500 text-[12px]">
            <span className="capitalize">Home</span>
            <span>/</span>
            <span className="capitalize">Categories</span>
            <span>/</span>
            <span className="capitalize">Gaming</span>
          </section>
          <section className="sponsored-products-section bg-white mt-[20px] mb-[20px] sm:mb-[40px] rounded-[7px] pb-2">
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
          <section className="flex lg:gap-4 lg:flex-row lg:justify-between">
            <section className="categories-menu hidden rounded-[7px] lg:flex w-72 lg:w-[22%] 2xl:w-[250px] primary-background-color text-white self-start">
              {/* <div className="flex flex-col w-full">
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 border-t font-light text-[14px] px-3">
                  <span className="poppins">Phones and tablets</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Appliances</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Computing</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Wearable Tech</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Supermarket</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Cameras</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Gaming</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Land & Properties</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Automobiles</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
                <div className="flex cursor-pointer items-center justify-between gap-3 border-b py-3 font-light text-[14px] px-3">
                  <span className="poppins">Other Categories</span>
                  <HiChevronRight className="text-[20px]" />
                </div>
              </div> */}
              <SidebarFilter />
            </section>
            <section className="category-products w-full lg:w-[73%] 2xl:w-[76%] bg-white rounded-[7px] pb-[20px]">
              <div className="p-3 main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
                <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
                  Category: Gaming
                </h3>
                <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
                  <div className="text-center">Load more items</div>
                  <div>
                    <HiChevronRight className="text-[16px] font-bold" />
                  </div>
                </div>
              </div>
              <div className="gap-x-5 gap-y-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-[100%] pt-3 px-3 pb-3">
                {products.map((product) => {
                  return (
                    <CategoriesPageProductCard
                      {...product}
                      key={product.productName}
                    />
                  );
                })}
              </div>
              <div className="flex items-center justify-center mt-[40px] sm:mt-[50px]">
                <button className="min-w-[200px] rounded-[5px] px-4 py-3 poppins text-[14px] primary-background-color text-white font-normal">
                  Load More Items
                </button>
              </div>
            </section>
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
          <section className="sponsored-products-section bg-white mt-[20px] mb-[20px] sm:mb-[40px] rounded-[7px] pb-2">
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
        </main>
      </MainAppLayout>
    </>
  );
}

export default CategoryPage;
