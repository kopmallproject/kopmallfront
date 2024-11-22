'use client';
import React, { useState } from 'react';
import { HiMiniMinus } from 'react-icons/hi2';
import { Rating } from 'react-simple-star-rating';

const SidebarFilter = () => {
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const brands = [
    'HP',
    'Logitech',
    'Canon',
    'Dell',
    'TP-Link',
    'Iphone',
    'Fan',
    'Shoes',
    'Speaker',
    'Bags',
    'Mouse',
    'Keyboard',
    'Printer'
  ];
  const [search, setSearch] = useState('');
  const [filteredBrands, setFilteredBrands] = useState(brands);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    // Filter brands based on the search input
    setFilteredBrands(
      brands.filter((brand) =>
        brand.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedCheckbox(value === selectedCheckbox ? null : value);
  };

  return (
    <aside className="w-72 border-r border-gray-200">
      {/* Browse Categories */}
      <div className="border-b py-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Browse Categories</h3>
          <HiMiniMinus size={24} />
        </div>
        <ul className="flex flex-col gap-1 cursor-pointer text-[12px]">
          <li>Computing Accessories</li>
          <li>Printers, Scanners, and Accessories</li>
          <li>Wi-Fi & Networking</li>
          <li>Laptops</li>
          <li>Computer Software</li>
          <li>Desktops and Monitors</li>
          <li>Projectors & Accessories</li>
          <li>PC Gaming</li>
          <li>Computing Bundles</li>
        </ul>
      </div>

      {/* Price Filter */}
      <div className="border-b py-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Price</h3>
          <HiMiniMinus size={24} />
        </div>
        <ul className="flex flex-col gap-1 cursor-pointer text-[12px]">
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              value="Under ₦2000"
              checked={selectedCheckbox === 'Under ₦2000'}
              onChange={() => setSelectedCheckbox('Under ₦2000')}
              className="custom-radio mr-2"
            />
            Under ₦2000
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              value="₦2000 - ₦5000"
              checked={selectedCheckbox === '₦2000 - ₦5000'}
              onChange={() => setSelectedCheckbox('₦2000 - ₦5000')}
              className="custom-radio mr-2"
            />
            ₦2000 - ₦5000
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              value="₦5000 - ₦10000"
              checked={selectedCheckbox === '₦5000 - ₦10000'}
              onChange={() => setSelectedCheckbox('₦5000 - ₦10000')}
              className="custom-radio mr-2"
            />
            ₦5000 - ₦10000
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              value="₦10000 - ₦20000"
              checked={selectedCheckbox === '₦10000 - ₦20000'}
              onChange={() => setSelectedCheckbox('₦10000 - ₦20000')}
              className="custom-radio mr-2"
            />
            ₦10000 - ₦20000
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              value="₦20000 - ₦40000"
              checked={selectedCheckbox === '₦20000 - ₦40000'}
              onChange={() => setSelectedCheckbox('₦20000 - ₦40000')}
              className="custom-radio mr-2"
            />
            ₦20000 - ₦40000
          </li>
          <li className="flex items-center">
            <input
              type="radio"
              name="price"
              value="Above ₦40000"
              checked={selectedCheckbox === 'Above ₦40000'}
              onChange={() => setSelectedCheckbox('Above ₦40000')}
              className="custom-radio mr-2"
            />
            Above ₦40000
          </li>
        </ul>
        <div className="flex items-center mt-4 space-x-2">
          <input
            type=""
            placeholder="Min"
            className="w-1/2 py-1 px-2 border border-gray-300 rounded bg-transparent"
          />
          <input
            type=""
            placeholder="Max"
            className="w-1/2 py-1 px-2 border border-gray-300 rounded bg-transparent"
          />
          <button className="py-1 px-2 border border-[#fcb349] hover:secondary-background-color text-white font-semibold rounded">
            GO
          </button>
        </div>
      </div>

      {/* Brand Filter */}
      <div className="border-b py-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Brand</h3>
          <HiMiniMinus size={24} />
        </div>
        <div className="my-[20px]">
          <input
            type="text"
            placeholder="Search Brand..."
            className="w-full p-2 border border-gray-300 bg-transparent rounded mb-2"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div className="h-40 overflow-y-scroll flex flex-col gap-1 cursor-pointer text-[12px]">
          {filteredBrands.map((brand, index) => (
            <label key={index} className="flex items-center">
              <input
                type="checkbox"
                className="mr-2 custom-checked-box"
                checked={selectedCheckbox === brand}
                onChange={() => handleCheckboxChange(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      {/* Item Availability */}
      <div className="border-b py-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Item Availability</h3>
          <HiMiniMinus size={24} />
        </div>
        <div className="flex flex-col gap-1 cursor-pointer text-[12px]">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 custom-checked-box"
              checked={selectedCheckbox === 'In Merchant Store'}
              onChange={() => handleCheckboxChange('In Merchant Store')}
            />
            In Merchant Store
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 custom-checked-box"
              checked={selectedCheckbox === 'In Konga Warehouse'}
              onChange={() => handleCheckboxChange('In Konga Warehouse')}
            />
            In Konga Warehouse
          </label>
        </div>
      </div>

      {/* Shipping */}
      <div className="border-b py-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Shipping</h3>
          <HiMiniMinus size={24} />
        </div>
        <label className="flex items-center text-[12px]">
          <input
            type="checkbox"
            className="mr-2 custom-checked-box"
            checked={selectedCheckbox === 'Pay on Delivery'}
            onChange={() => handleCheckboxChange('Pay on Delivery')}
          />
          Pay on Delivery
        </label>
      </div>

      {/* Sold By */}
      <div className="border-b py-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Sold By</h3>
          <HiMiniMinus size={24} />
        </div>
        <label className="flex items-center text-[12px]">
          <input
            type="checkbox"
            className="mr-2 custom-checked-box"
            checked={selectedCheckbox === 'Sold by Konga'}
            onChange={() => handleCheckboxChange('Sold by Konga')}
          />
          Sold by Konga
        </label>
      </div>
      {/* Rating */}
      <div className="py-4 px-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">Rating</h3>
          <HiMiniMinus size={24} />
        </div>
        <ul className="flex flex-col justify-center gap-1">
          {[5, 4, 3, 2, 1].map((rating) => (
            <li key={rating} className="flex items-center text-[12px]">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="custom-radio mr-2"
              />
              <Rating
                initialValue={rating} // Each star is 20%, so 5 stars = 100%
                readonly
                size={15}
              />
              &nbsp; & Up
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarFilter;
