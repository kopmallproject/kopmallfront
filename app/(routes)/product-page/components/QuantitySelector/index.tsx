// components/QuantitySelector.tsx
'use client';

import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <div className="flex items-center gap-2 pt-[20px] w-full">
      <div className="flex items-center border border-gray-300 rounded ">
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
      </div>
      <button className="px-4 py-2 text-white bg-[#FCB349] rounded hover:bg-orange-400 focus:outline-none lg:w-1/2">
        Buy Now!
      </button>
      <button className=" text-gray-700 p-2 border border-gray-300 rounded hover:bg-gray-100 focus:outline-none">
        <AiOutlineHeart size={20} />
      </button>
    </div>
  );
};

export default QuantitySelector;
