import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import FlexibleWidthProductCard from '../../(home)/components/FlexibleWidthProductCard';
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

function CategoryPage() {
  return (
    <MainAppLayout>
      <main className="pb-[100px]">
        <section className="navigation-indicator mt-[25px] mb-5 lg:mb-8 poppins font-normal flex gap-3 items-center text-gray-500 text-[12px]">
          <span className="capitalize">Home</span>
          <span>/</span>
          <span className="capitalize">Categories</span>
          <span>/</span>
          <span className="capitalize">Gaming</span>
        </section>
        <section className="flex lg:flex-row lg:justify-between">
          <section className="categories-menu hidden lg:flex lg:w-[22%] 2xl:w-[275px] primary-background-color text-white self-start">
            <div className="flex flex-col w-full">
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
            </div>
          </section>
          <section className="category-products lg:w-[73%]">
            <div className="gap-x-5 gap-y-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-[100%]">
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
                Load More Products
              </button>
            </div>
          </section>
        </section>
      </main>
    </MainAppLayout>
  );
}

export default CategoryPage;
