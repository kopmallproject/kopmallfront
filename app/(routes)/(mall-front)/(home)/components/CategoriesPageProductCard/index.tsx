'use client';

import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import Image from 'next/image';
import DummyBanner1 from '@/app/assets/images/img-8.png';
import DummyBanner2 from '@/app/assets/images/img-9.png';
import { HiOutlineHeart } from 'react-icons/hi2';
import dummyProduct from '@/app/assets/images/img-10.png';
import { Rating } from 'react-simple-star-rating';
import { StaticImageData } from 'next/image';

type ProductSpecs = {
  productName: string;
  originalPrice: number;
  discount: number;
  discountedPrice: number;
  rating: number;
  isLiked: boolean;
  productImage: StaticImageData; // Assuming the path is of type string
};

function ProductCard(product: ProductSpecs) {
  return (
    <div className="product-card relative flex flex-col">
      <div className="product-image-wrapper bg-[#F5F5F5] p-3 h-[190px] sm:h-[220px] flex justify-center items-center">
        <div className="discounts-and-isLiked-wrapper absolute left-0 top-[10px] px-3 flex justify-between w-full items-center">
          <div className="secondary-background-color mt-[5px] self-start rounded-[5px] px-2 pt-[3.7px] pb-[2.5px] min-w-[50px] text-[10px] text-center">
            -{product.discount}%
          </div>
          <div className="like-product-button bg-white flex items-center justify-center w-[35px] h-[35px] rounded-full">
            <HiOutlineHeart className="text-[20px] mt-[2px] mr-[1.2px]" />
          </div>
        </div>
        <Image
          src={product.productImage}
          alt="user-icon"
          className="pt-[40px] bg-cover w-[100px] sm:w-[120px]"
        />
      </div>
      <div className="flex flex-col min-h-[100px]">
        <div className="product-name poppins uppercase font-normal text-[12px] sm:text-[14px] mt-3">
          {product.productName}
        </div>
        <div className="price-and-discount mt-1 flex gap-4">
          <span className="text-red-500 font-normal poppins text-[12px] sm:text-[14px]">
            {product.discountedPrice}
          </span>
          <span className="text-gray-500 font-normal poppins line-through text-[12px] sm:text-[14px]">
            {product.originalPrice}
          </span>
        </div>
        <div className="rating flex gap-1 items-center">
          <Rating size={15} initialValue={product.rating} />
          <span className="text-[10px] mt-[4px]">(200)</span>
        </div>
      </div>
      <button
        className="w-full mt-3 font-medium border border-[#FCB349] bg-[#FCB349] rounded-[7px] px-3 py-3 text-[12px] poppins text-center"
        // href="/log-in"
      >
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;
