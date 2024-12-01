import React from 'react';
import Logo from '@/app/assets/images/img-22.png';
import { HiMiniPhone } from 'react-icons/hi2';
import { HiMiniEnvelope } from 'react-icons/hi2';
import Image from 'next/image';
import { HiPencilSquare } from 'react-icons/hi2';

function StoreProfileCard() {
  return (
    <div className="user-card rounded p-4 bg-gray-100">
      <section className="flex justify-between items-center">
        <Image
          src={Logo}
          alt="logo"
          className="bg-cover w-[50px] h-[50px] rounded-full"
        />
        <div className="flex gap-4 items-center">
          <HiPencilSquare className="text-[25px] cursor-pointer" />
          <div className="text-[10px] deactivation-button poppins primary-background-color text-white rounded-[7px] px-3 py-2">
            Deactivate Store
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between min-h-[100px]">
        <section>
          <div className="name-and-id font-medium text-[14px] mt-5 poppins">
            <span>Samsung Official Store</span>
            <span className="font-normal text-[12px]">
              {' '}
              | 672e29ef3a031fecf3d0cb22
            </span>
          </div>
          <section className="flex flex-col gap-3 mt-4 text-gray-400 font-medium text-[12px]">
            <div className="flex gap-3 items-center">
              <HiMiniEnvelope className="text-[20px]" />
              <div>hello@email.com</div>
            </div>
            <div className="flex gap-3 items-center">
              {/* create an email/mailto link */}
              <HiMiniPhone className="text-[20px]" />
              <div>+234 81 8965 7854</div>
            </div>
          </section>
          <div className="user-order-history-wrapper text-[10px] poppins flex flex-wrap gap-4 mt-8">
            250 products | Since April 25, 2025
          </div>
        </section>
      </section>
    </div>
  );
}

export default StoreProfileCard;
