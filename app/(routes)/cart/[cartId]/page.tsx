'use client';

import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import FlexibleWidthProductCard from '../../(home)/components/FlexibleWidthProductCard';
import { products } from '@/app/data/products-list';
import Image from 'next/image';
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
import DummyProduct1 from '@/app/assets/images/img-47.png';
import DummyProduct2 from '@/app/assets/images/img-18.png';
import DummyProduct3 from '@/app/assets/images/img-17.png';
import { Rating } from 'react-simple-star-rating';
import { HiChevronRight } from 'react-icons/hi2';
import { HiMiniMinus } from 'react-icons/hi2';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiPlus } from 'react-icons/hi2';

// import { products } from '@/app/data/products-list';

const cartProducts = [
  {
    productName: 'Gaming Mouse RGB',
    originalPrice: 39.99,
    discount: 20,
    discountedPrice: 31.99,
    rating: 5, // rounded from 4.5
    isLiked: false,
    productImage: DummyProduct1
  },
  {
    productName: 'Smartphone Tripod Stand',
    originalPrice: 19.99,
    discount: 10,
    discountedPrice: 17.99,
    rating: 4, // rounded from 4.1
    isLiked: false,
    productImage: DummyProduct2
  },
  {
    productName: 'USB-C Hub Multiport Adapter',
    originalPrice: 34.99,
    discount: 15,
    discountedPrice: 29.74,
    rating: 4, // rounded from 4.3
    isLiked: true,
    productImage: DummyProduct3
  }
];
function CartPage() {
  return (
    <MainAppLayout>
      <main className="pb-[100px]">
        <section className="navigation-indicator mt-[25px] mb-5 lg:mb-8 poppins font-normal flex gap-3 items-center text-gray-500 text-[12px]">
          <span className="capitalize">Home</span>
          <span>/</span>
          <span className="capitalize">Account</span>
          <span>/</span>
          <span className="capitalize">Cart</span>
          {/* <span>/</span>
          <span className="capitalize">Checkout</span> */}
        </section>
        <section className="flex flex-col lg:flex-row lg:justify-between">
          <section className="cart-core border-[1px] rounded-[5px] flex flex-col lg:w-[75%]">
            <div className="title poppins py-2 px-4 border-b-[1px]">Cart</div>
            {cartProducts.map((each) => {
              return (
                <div
                  key={each.productName}
                  className="class-item-card border-b-[1px]"
                >
                  <div className="cart-product-card p-4 relative flex flex-row gap-4">
                    <div className="product-image-wrapper bg-[#F5F5F5] h-[75px] sm:h-[75px] flex justify-center items-center">
                      <Image
                        src={each.productImage}
                        alt="user-icon"
                        className="bg-cover w-[75px] sm:w-[75px]"
                      />
                    </div>
                    <div className="rating">
                      <div className="product-name poppins uppercase font-normal text-[14px] mt-3">
                        {each.productName}
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex items-center flex-row gap-2">
                          <Rating size={15} initialValue={each.rating} />
                          <div className="text-[12px] flex gap-1 pt-[3px]">
                            <span>(150 Reviews)</span>
                            <span>|</span>
                            <span className="text-green-500 font-semibold">
                              In Stock
                            </span>
                          </div>
                        </div>
                        <div className="text-right mt-1 text-[14px]">
                          ${each.discountedPrice}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart-functionalities-wrapper flex w-full justify-between px-4 py-4">
                    <div className="flex flex-row gap-3 items-center">
                      <span className="poppins text-[12px] sm:text-[14px]">
                        Remove
                      </span>
                      <div>
                        <HiOutlineTrash className="text-[20px] text-red-500" />
                      </div>
                    </div>
                    <div className="flex w-[150px] rounded-[5px] border">
                      <div className="w-1/3 py-1 flex items-center justify-center border-r">
                        <HiMiniMinus />
                      </div>
                      <div className="w-1/3 py-1 text-center poppins text-[16px]">
                        3
                      </div>
                      <div className="w-1/3 py-1 secondary-background-color flex items-center justify-center">
                        <HiPlus />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="cart-summary flex flex-col lg:w-[20%]">
            <div className="mt-4 lg:mt-0 flex flex-col border-[1px] rounded-[5px]">
              <div className="title poppins py-2 px-4 border-b-[1px]">
                Cart Summary
              </div>
              <div className="flex justify-between p-4">
                <span>Subtotal:</span>
                <span>$79.72</span>
              </div>
            </div>
            <button className="secondary-background-color mt-4 px-4 py-3 poppins text-[14px] text-center font-normal">
              Checkout($79.72)
            </button>
          </section>
        </section>
        <section className="recommended-products mt-[50px] sm:mt-[75px] md:mt-[100px]">
          <h3 className="before:w-[3px] before:h-[50px] before:mr-[15px] before:secondary-background-color before:inline-block poppins font-normal text-2xl sm:text-3xl secondary-text-color flex items-center">
            Recommended Products
          </h3>
          <div className="gap-x-5 gap-y-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-[100%] mt-6 md:mt-8">
            {products.slice(0, 6).map((product) => {
              return (
                <FlexibleWidthProductCard
                  {...product}
                  key={product.productName}
                />
              );
            })}
          </div>
          {/* <div className="flex items-center justify-center mt-[40px] sm:mt-[50px]">
            <button className="min-w-[200px] rounded-[5px] px-4 py-3 poppins text-[14px] secondary-background-color font-normal">
              Load More Products
            </button>
          </div> */}
        </section>
      </main>
    </MainAppLayout>
  );
}

export default CartPage;
