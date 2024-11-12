import React from 'react';
import { HiOutlineRefresh } from 'react-icons/hi';
import { RiArrowGoBackLine, RiTruckLine } from 'react-icons/ri';
import { Rating } from 'react-simple-star-rating';
import QuantitySelector from '../QuantitySelector';

const ProductDescription: React.FC = () => {
  return (
    <div className="product-description w-full lg:w-3/5">
      <h1 className="popppins text-2xl font-bold mb-2">
        Havic HV G-92 Gamepad
      </h1>
      <div className="flex items-center gap-4">
        <div className="rating">
          <Rating size={20} />
        </div>
        <span className="text-gray-500">(150 Reviews)</span>
        <span className="text-green-600 font-semibold">In Stock</span>
      </div>
      <p className="text-2xl font-bold text-gray-800 mt-4">$192.00</p>
      <p className="text-gray-600 mt-4">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble-free install & mess-free removal. Pressure
        sensitive.
      </p>
      <QuantitySelector />
      <div className="mt-6">
        <div className="flex items-center border border-gray-300 p-4">
          <RiTruckLine className="text-gray-600 w-6 h-6 mr-3" />
          <div>
            <p className="font-semibold">Free Delivery</p>
            <p className="text-gray-500 text-sm">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="flex items-center border border-gray-300 p-4">
          <HiOutlineRefresh className="text-gray-600 w-6 h-6 mr-3" />
          <div>
            <p className="font-semibold">Return Delivery</p>
            <p className="text-gray-500 text-sm">
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
