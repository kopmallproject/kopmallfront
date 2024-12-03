import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';

function NotificationOrderPreviewCard() {
  return (
    <div className="w-full sm:min-w-[600px] bg-gray-100 border-[1px] rounded-[7px] gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
      <div className="w-full flex items-center gap-5">
        <div className="w-[100px] lg:w-[150px] grid grid-cols-2 gap-2">
          <Image src={dummyAvatar} alt="user-icon" className=" bg-cover" />
          <Image src={dummyAvatar} alt="user-icon" className=" bg-cover" />
          <Image src={dummyAvatar} alt="user-icon" className=" bg-cover" />
          <Image src={dummyAvatar} alt="user-icon" className=" bg-cover" />
        </div>
        <div className="w-full flex flex-col text-[12px]">
          <h3 className="poppins inline-block font-medium mb-2">
            Havic HV G-92 Gamepad
          </h3>
          <div className="block text-slate-400 mb-1.5">Order ID: 217892</div>
          <div className="text-xs mb-1.5 text-white bg-yellow-600 px-3 self-start py-1 rounded-[7px]">
            Active
          </div>
          <span className="poppins block text-[10px]">21-06-2024</span>
        </div>
      </div>
      {/* <div className="flex items-center w-full justify-end">
          <Link
            href="/admin/orders/order-details/123"
            className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
          >
            See details
          </Link>
        </div> */}
    </div>
  );
}

export default NotificationOrderPreviewCard;
