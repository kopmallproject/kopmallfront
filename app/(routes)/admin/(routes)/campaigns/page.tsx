'use client';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import MainAdminLayout from '../../components/layout/MainAdminLayout';
import Logo from '@/app/assets/images/img-22.png';
import { HiMiniPhone } from 'react-icons/hi2';
import { HiMiniEnvelope } from 'react-icons/hi2';
import CampaignCard from './components/CampaignCard';
import { HiMiniPlus } from 'react-icons/hi2';

function Deals() {
  return (
    <MainAdminLayout>
      <section className="text-[12px] text-gray-500 mt-2 mb-2 md:mb-4">
        Admin / Campaigns
      </section>
      <main className="bg-white pb-[100px] w-full flex flex-col min-h-[150px] text-[14px] rounded-[7px]">
        <div className="w-full">
          <h2 className="poppins font-medium text-[16px] pb-3">Campaigns</h2>
        </div>
        <section className="users-wrapper grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
          <CampaignCard />
        </section>
      </main>
      <button
        className="add-product-button rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] fixed bottom-[30px] 
      right-[30px] md:bottom-[50px] md:right-[50px] secondary-background-color flex items-center justify-center"
      >
        <HiMiniPlus className="text-black text-[25px] sm:text-[30px]" />
      </button>
    </MainAdminLayout>
  );
}

export default Deals;
