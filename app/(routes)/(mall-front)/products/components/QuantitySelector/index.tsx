// components/QuantitySelector.tsx
'use client';
import { HiMiniMinus } from 'react-icons/hi2';
import { HiPlus } from 'react-icons/hi2';

import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 pt-[20px] w-full">
      <div className="self-start flex w-[150px] border rounded-[5px]">
        <div className="w-1/3 py-2 flex items-center justify-center border-r rounded-tl-[5px] rounded-bl-[5px]">
          <HiMiniMinus />
        </div>
        <div className="w-1/3 py-2 text-center poppins text-[14px]">3</div>
        <div className="w-1/3 py-2 secondary-background-color flex items-center justify-center rounded-tr-[5px] rounded-br-[5px]">
          <HiPlus />
        </div>
      </div>
      {/* <div className="flex items-center border border-gray-300 rounded ">
        <div className="">
          <button
            onClick={decrement}
            className="px-2 py-2 text-gray-700 border-r h-full border-gray-300 hover:text-black hover:bg-[#FCB349] focus:outline-none"
          >
            -
          </button>
        </div>

        <span className="px-3 text-gray-800">{quantity}</span>
        <div className="">
          <button
            onClick={increment}
            className="px-2 py-2 text-gray-700 border-l border-gray-300 hover:text-black focus:outline-none hover:bg-[#FCB349]"
          >
            +
          </button>
        </div>
      </div> */}
      <div className="flex flex-row gap-3 mt-4 sm:mt-0">
        <button className="w-[75%] xsm:w-[200px] px-6 lg:px-8 py-2 bg-[#FCB349] rounded-[5px] hover:bg-orange-400 focus:outline-none">
          Buy Now!
        </button>
        <div className="w-[10%]">
          <button className=" text-gray-700 p-2 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none">
            <AiOutlineHeart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuantitySelector;
