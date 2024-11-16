'use client';

import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import FlexibleWidthProductCard from '../../(home)/components/FlexibleWidthProductCard';
import { products } from '@/app/data/products-list';
import Image from 'next/image';
import Link from 'next/link';
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
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiMiniMinus } from 'react-icons/hi2';
import { HiPlus } from 'react-icons/hi2';
import ProductCard from '../../(home)/components/ProductCard';
// import DummyBanner1 from '@/app/assets/images/img-8.png';
import DummyBanner1 from '@/app/assets/images/img-23.png';
import DummyBanner2 from '@/app/assets/images/img-9.png';
import DummyBanner3 from '@/app/assets/images/img-20.png';
import DummyBanner4 from '@/app/assets/images/img-21.png';
import DummyBanner5 from '@/app/assets/images/img-22.png';
import DummyBanner6 from '@/app/assets/images/img-9.png';

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
      <main className="pb-[100px] cart-page">
        <section className="navigation-indicator pt-[25px] md:pt-[40px] mb-4 lg:mb-7 poppins font-normal flex gap-3 items-center text-gray-500 text-[12px]">
          <span className="capitalize">Home</span>
          <span>/</span>
          <span className="capitalize">Account</span>
          <span>/</span>
          <span className="capitalize">Cart</span>
          {/* <span>/</span>
          <span className="capitalize">Checkout</span> */}
        </section>
        <section className="flex flex-col lg:flex-row lg:justify-between">
          <section className="cart-core border-[1px] rounded-[5px] flex flex-col lg:w-[75%] bg-white">
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
                    <div className="more-product-details w-full lg:w-[300px]">
                      <div className="flex flex-row items-center justify-between gap-6 mt-3">
                        <div className="product-name poppins uppercase font-normal text-[14px]">
                          {each.productName}
                        </div>
                        <div className="text-right text-[14px]">
                          ${each.discountedPrice}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between">
                        <div className="flex items-center flex-row gap-2">
                          <Rating size={15} initialValue={each.rating} />
                          <div className="text-[12px] flex gap-1 pt-[3px]">
                            <span>(150 Reviews)</span>
                          </div>
                        </div>
                        <span className="mt-1 text-green-500 font-semibold text-[12px]">
                          In Stock
                        </span>
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
          <div className="flex flex-col gap-y-4 lg:w-[20%] ">
            <section className="cart-summary flex flex-col w-full">
              <div className="mt-4 lg:mt-0 flex flex-col border-[1px] rounded-[5px] bg-white">
                <div className="title poppins py-2 px-4 border-b-[1px]">
                  Cart Summary
                </div>
                <div className="flex justify-between p-4">
                  <span>Subtotal:</span>
                  <span>$79.72</span>
                </div>
              </div>
              <Link href="/checkout/123">
                <button className="secondary-background-color mt-4 px-4 py-3 poppins text-[14px] text-center font-normal w-full rounded-[5px]">
                  Checkout($79.72)
                </button>
              </Link>
            </section>
            <section className="flex flex-col w-full rounded-[5px] bg-white p-3 poppins">
              <h2 className="flex flex-col">Returns are easy.</h2>
              <div className="mt-1 flex flex-col font-light text-[12px]">
                Free returns for All eligible items within 7 days{' '}
              </div>
              <Link
                className="font-light text-[12px] secondary-text-color mt-2 underline"
                href="/"
              >
                More details
              </Link>
            </section>
            <div className="attraction-gif w-full">
              <Image
                src={DummyBanner1}
                alt="user-icon"
                className="bg-cover w-full"
              />
            </div>
          </div>
        </section>
        {/* <section className="recommended-products mt-[150px] lg:mt-[200px]">
          <h3 className="before:w-[3px] before:h-[35px] sm:before:h-[50px] before:mr-[15px] before:secondary-background-color before:inline-block poppins font-normal text-[20px] sm:text-2xl secondary-text-color flex items-center">
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
        </section> */}
        <section className="recently-viewed bg-white mt-[100px] lg:mt-[150px] rounded-[7px] pb-2">
          <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
            <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
              Recently Viewed
            </h3>
            {/* <div className="poppins text-[12px] xsm:text-[14px] font-normal flex gap-2 items-center">
              <div className="text-center">See all items</div>
              <div>
                <HiChevronRight className="text-[16px] font-bold" />
              </div>
            </div> */}
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
        <section className="sponsored-products-section bg-white mt-[20px] rounded-[7px] pb-2">
          <div className="main-header-wrapper py-2 px-3 border-b-[1px] flex flex-row justify-between items-center">
            <h3 className="poppins secondary-text-color font-normal text-[14px] xsm:text-[16px] sm:text-[20px] flex items-center">
              Recommended products
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
      </main>
    </MainAppLayout>
  );
}

export default CartPage;
