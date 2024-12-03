import React from 'react';
import Logo from '@/app/assets/images/img-39.png';
import { HiMiniPhone } from 'react-icons/hi2';
import { HiMiniEnvelope } from 'react-icons/hi2';
import Image from 'next/image';
import { useAppDispatch } from '@/app/rtk-base/hooks';
import { showOverlay } from '@/app/rtk-base/slices/overlay-slice';
import { HiPencilSquare } from 'react-icons/hi2';
import { HiOutlineTrash } from 'react-icons/hi2';

function CampaignCard() {
  const dispatch = useAppDispatch();
  return (
    <div className="user-card rounded bg-gray-100">
      <section className="flex justify-between items-center">
        <div className="w-full">
          <Image
            src={Logo}
            alt="logo"
            className="deal-banner bg-cover w-full h-[100px]"
          />
        </div>
      </section>
      <section className="flex flex-row items-center justify-between p-4">
        <div className="deal-name-and-id poppins font-medium text-[14px]">
          Black Friday 2024
        </div>
        <div>
          <div className="controls flex flex-row-reverse gap-3 w-full">
            <div className="cursor-pointer edit-product-button flex items-center justify-center w-[25px] h-[25px] xsm:w-[35px] xsm:h-[35px] rounded-[7px] bg-white">
              <HiPencilSquare
                onClick={() => {
                  console.log('Opening Deals Overlay');
                  dispatch(showOverlay('campaign'));
                }}
                className="text-[15px] xsm:text-[18px]"
              />
            </div>
            <div className="cursor-pointer delete-product-button flex items-center justify-center w-[25px] h-[25px] xsm:w-[35px] xsm:h-[35px] rounded-[7px] bg-white">
              <HiOutlineTrash className="text-[15px] xsm:text-[18px]" />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 min-h-[100px]">
        <div className="text-[12px]">
          3 months warranty on all related products for REGISTERED USERS ONLY.
          Goal of campaign is to attract more users.
        </div>
        <div className="user-order-history-wrapper text-[10px] poppins flex flex-wrap gap-4 mt-4">
          250 products | Since April 25, 2025
        </div>
      </section>
      <section className="pb-4 px-4 mt-3">
        <h3 className="poppins text-[12px] font-medium">Related Categories</h3>
        <div className="flex flex-wrap items-center gap-3 mt-2">
          <div className="text-[10px] text-center items-center bg-white px-3 py-1.5 rounded-full">
            All Categories
          </div>
        </div>
      </section>
    </div>
  );
}

export default CampaignCard;
