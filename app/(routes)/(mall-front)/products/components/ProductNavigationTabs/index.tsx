'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/rtk-base/hooks';
import { RootState } from '@/app/rtk-base/store';
import { setActiveTab } from '@/app/rtk-base/slices/tab-slice';
import { Rating } from 'react-simple-star-rating';

const ProductNavigationTabs = () => {
  const activeTab = useAppSelector((state: RootState) => state.tab.activeTab);
  const dispatch = useAppDispatch();

  return (
    <div className="container hidden lg:block mx-auto p-6 bg-white rounded-[7px] shadow-md min-h-[400px]">
      {/* Tabs */}
      <div className="flex border-b">
        {['Overview', 'Description', 'Warranty', 'Reviews'].map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTab(tab))}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab
                ? 'text-[#FDAF3E]'
                : 'text-gray-700 border-transparent'
            } border-b-2 hover:border-[#FDAF3E] focus:outline-none`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 text-sm text-gray-600">
        {activeTab === 'Overview' && (
          <div>
            <h3 className="font-normal text-gray-800 poppins mb-2">
              Product Overview
            </h3>
            <p>
              This is a placeholder for an overview of the product features and
              highlights.
            </p>
          </div>
        )}
        {activeTab === 'Description' && (
          <div className="flex flex-col gap-6">
            <table className="min-w-full text-left text-gray-500 border border-gray-300 rounded-[7px]">
              <tbody className="rounded-[7px]">
                <tr className="border-b">
                  <th className="px-4 py-2 font-medium text-gray-700">
                    Weight
                  </th>
                  <td className="px-4 py-2">1.5kg</td>
                </tr>
                <tr className="border-b">
                  <th className="px-4 py-2 font-medium text-gray-700">
                    Colour
                  </th>
                  <td className="px-4 py-2">Grey</td>
                </tr>
                <tr>
                  <th className="px-4 py-2 font-medium text-gray-700">Brand</th>
                  <td className="px-4 py-2">Sony</td>
                </tr>
              </tbody>
            </table>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">Brand</h3>
              <p className="mt-2">
                Sony PS4 Controller Dualshock 4 Wireless Game Pad - Red Camo
              </p>
              <p className="mt-2">
                The DualShock 4 Wireless Controller features familiar controls,
                and incorporates several innovative features for an immersive
                gaming experience.
              </p>
            </div>
          </div>
        )}
        {activeTab === 'Warranty' && (
          <div>
            <h3 className="font-semibold text-gray-800">
              Warranty Information
            </h3>
            <p>
              This product comes with a 1-year warranty covering manufacturing
              defects.
            </p>
          </div>
        )}
        {activeTab === 'Reviews' && (
          // <div>
          //   <h3 className="font-semibold text-gray-800">Customer Reviews</h3>
          //   <p>Customer reviews and ratings will be displayed here.</p>
          // </div>
          <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
            {/* Overall Rating */}
            <div className="flex flex-col lg:flex-row lg:gap-x-8">
              <div className="flex flex-col items-start lg:w-1/3">
                <div className="flex items-center gap-x-4">
                  <h1 className="text-4xl font-semibold">4.5</h1>
                  <p className="text-gray-600">out of 5</p>
                  <Rating initialValue={4.5} readonly size={25} allowFraction />
                </div>
                <p className="text-sm text-gray-500 mt-2">88 Reviews</p>
              </div>
              {/* Rating Distribution */}
              <div className="mt-6 lg:mt-0 lg:w-2/3">
                <div className="flex flex-col gap-2">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center">
                      <p className="text-sm text-gray-500 w-12">{star} star</p>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2">
                        <div
                          className="bg-[#FCB349] h-full"
                          style={{ width: `${star * 20}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-500">
                        {Math.floor(Math.random() * 50) + 20}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Individual Reviews */}
            <div className="mt-6 space-y-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="border-b pb-4 flex items-center gap-4"
                >
                  <div className="flex flex-col justify-center gap-2">
                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                      W
                    </div>
                    <div className="mb-3">
                      <p className="font-semibold">Wave</p>
                      <p className="text-xs text-gray-500">June 25, 2024</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Rating
                      initialValue={3.5}
                      readonly
                      size={20}
                      allowFraction
                    />
                    <p className="text-gray-600 mt-2">
                      Exactly as advertised but not what I really needed. Not
                      bad.
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 text-[#FCB349] font-semibold">
              Read more
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductNavigationTabs;
