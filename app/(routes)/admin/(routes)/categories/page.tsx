'use client';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import MainAdminLayout from '../../components/layout/MainAdminLayout';
import { useAppDispatch } from '@/app/rtk-base/hooks';
import { showOverlay } from '@/app/rtk-base/slices/overlay-slice';
import Logo from '@/app/assets/images/img-22.png';
import { HiMiniPhone } from 'react-icons/hi2';
import { HiMiniEnvelope } from 'react-icons/hi2';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiPencilSquare } from 'react-icons/hi2';
import CategoryCard from './components/CategoryCard';
import { HiMiniPlus } from 'react-icons/hi2';

function Categories() {
  const dispatch = useAppDispatch();
  return (
    <MainAdminLayout>
      <section className="text-[12px] text-gray-500 mb-2">
        Admin / Categories
      </section>
      <main className="bg-white pb-[100px] w-full flex flex-col min-h-[150px] text-[14px] rounded-[7px]">
        <div className="w-full">
          <h2 className="poppins font-medium text-[16px] pb-3">Categories</h2>
        </div>
        <section className="categories-wrapper flex flex-wrap gap-4 mt-4">
          <CategoryCard categoryName="Computers" />
          <CategoryCard categoryName="Headsets" />
          <CategoryCard categoryName="Smart Watches" />
          <CategoryCard categoryName="Smart Rings" />
          <CategoryCard categoryName="Smart TVs" />
          <CategoryCard categoryName="Accessories" />
          <CategoryCard categoryName="Samsung Devices" />
        </section>
      </main>
      <button
        className="add-product-button rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] fixed bottom-[30px] 
      right-[30px] md:bottom-[50px] md:right-[50px] secondary-background-color flex items-center justify-center"
      >
        <HiMiniPlus
          onClick={() => {
            dispatch(showOverlay('categories'));
          }}
          className="text-black text-[25px] sm:text-[30px]"
        />
      </button>
    </MainAdminLayout>
  );
}

export default Categories;
