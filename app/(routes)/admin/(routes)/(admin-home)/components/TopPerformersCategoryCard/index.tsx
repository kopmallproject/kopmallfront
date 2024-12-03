import React from 'react';
import {
  HiArrowLeftCircle,
  HiHome,
  HiMegaphone,
  HiOutlineBell,
  HiShoppingBag,
  HiUsers
} from 'react-icons/hi2';
import { HiMiniSquaresPlus } from 'react-icons/hi2';
import { HiBuildingStorefront } from 'react-icons/hi2';
import { HiClipboardDocumentList } from 'react-icons/hi2';
import { HiWallet } from 'react-icons/hi2';
import { HiMiniViewColumns } from 'react-icons/hi2';
import { HiMagnifyingGlass } from 'react-icons/hi2';

function TopPerformersCategoryCard() {
  return (
    <div className="category-card rounded-[10px] px-6 py-4 text-white primary-background-color flex justify-between items-center">
      <div className="w-1/4 flex">
        <div className="self-start category-icon-wrapper primary-text-color bg-slate-100 p-2 rounded-[10px]">
          <HiMiniViewColumns className="w-[40px] h-[40px]" />
        </div>
      </div>
      <div className="category-name poppins text-[12px] w-2/4">Electronics</div>
      <div className="poppins text-[12px] w-1/4 text-right">2350</div>
    </div>
  );
}

export default TopPerformersCategoryCard;
