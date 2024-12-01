import React from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { RiArrowGoBackLine, RiTruckLine } from 'react-icons/ri';
import { Rating } from 'react-simple-star-rating';
import QuantitySelector from '../QuantitySelector';

interface ProductDescriptionProps {
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  rating: number;
  stockStatus: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({
  name,
  price,
  originalPrice,
  description,
  rating,
  stockStatus
}) => {
  return (
    <div className="product-description w-full lg:w-3/5 bg-white p-3 rounded-[7px]">
      <h1 className="poppins text-2xl font-normal mb-2">{name}</h1>
      <div className="flex items-center gap-4">
        <div className="rating">
          <Rating size={20} initialValue={rating} />
        </div>
        <span className="text-gray-500">(150 Reviews)</span>
        <span
          className={`font-semibold ${stockStatus === 'In Stock' ? 'text-green-600' : 'text-red-600'}`}
        >
          {stockStatus}
        </span>
      </div>
      <p className="text-[16px] sm:text-2xl font-bold text-gray-800 mt-4">
        {price}
      </p>
      <p className="text-gray-600 mt-4 text-[14px]">{description}</p>
      <QuantitySelector />
      <div className="mt-6 flex flex-col gap-4 md:flex-row lg:flex-col">
        <div className="flex items-center border border-gray-300 px-4 py-3 rounded-[5px]">
          <RiTruckLine className="text-gray-600 w-6 h-6 mr-3" />
          <div>
            <p className="font-normal poppins">Free Delivery</p>
            <p className="text-gray-500 text-[12px]">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 px-4 py-3 rounded-[5px]">
          <HiOutlineRefresh className="text-gray-600 w-6 h-6 mr-3" />
          <div>
            <p className="font-normal poppins">Return Delivery</p>
            <p className="text-gray-500 text-[12px]">
              Free 30-Day Delivery Returns.{' '}
              <a href="#" className="text-blue-600 underline">
                Details
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
