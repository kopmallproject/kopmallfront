'use client';

import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import Image from 'next/image';
import DummyBanner1 from '@/app/assets/images/img-8.png';
import DummyBanner2 from '@/app/assets/images/img-9.png';
import { HiOutlineHeart } from 'react-icons/hi2';
import dummyProduct from '@/app/assets/images/img-10.png';
import { useAppDispatch } from '@/app/rtk-base/hooks';
import { showOverlay } from '@/app/rtk-base/slices/overlay-slice';
import { Rating } from 'react-simple-star-rating';
import { StaticImageData } from 'next/image';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiPencilSquare } from 'react-icons/hi2';

type ProductSpecs = {
  productId: string;
  productName: string;
  originalPrice: number;
  discount: number;
  discountedPrice: number;
  rating: number;
  isLiked: boolean;
  productImage: StaticImageData;
};

function ProductCard(product: ProductSpecs) {
  const dispatch = useAppDispatch();
  return (
    <div className="product-card relative flex flex-col">
      <div className="product-image-wrapper bg-[#F5F5F5] p-3 h-[190px] sm:h-[220px] flex justify-center items-center">
        <div className="discounts-and-isLiked-wrapper absolute left-0 top-[10px] px-3 flex justify-between w-full items-center">
          <div className="secondary-background-color mt-[5px] self-start rounded-[5px] px-2 py-1 min-w-[50px] text-[10px] text-center">
            -{product.discount}%
          </div>
          <div className="flex gap-3">
            <div className="cursor-pointer edit-product-button flex items-center justify-center w-[28px] xsm:w-[35px] h-[28px] xsm:h-[35px] rounded-[7px] bg-white">
              <HiPencilSquare
                onClick={() => {
                  console.log('Opening Deals Overlay');
                  dispatch(showOverlay('product'));
                }}
                className="text-[15px] xsm:text-[18px]"
              />
            </div>
            <div className="cursor-pointer delete-product-button flex items-center justify-center w-[28px] xsm:w-[35px] h-[28px] xsm:h-[35px] rounded-[7px] bg-white">
              <HiOutlineTrash className="text-[15px] xsm:text-[18px]" />
            </div>
          </div>
        </div>
        <Image
          src={product.productImage}
          alt="user-icon"
          className="pt-[40px] bg-cover w-[100px] sm:w-[120px]"
        />
      </div>
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
  );
}

export default ProductCard;
