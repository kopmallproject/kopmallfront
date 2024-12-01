'use client';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import MainAdminLayout from '../../components/layout/MainAdminLayout';
import Logo from '@/app/assets/images/img-22.png';
import { HiMiniPhone } from 'react-icons/hi2';
import { HiMiniEnvelope } from 'react-icons/hi2';
import { HiOutlineTrash } from 'react-icons/hi2';
import { HiPencilSquare } from 'react-icons/hi2';
import CategoryCard from './components/CategoryCard';

function Categories() {
  return (
    <MainAdminLayout>
      <section className="text-[12px] text-gray-500 mt-2 mb-4">
        Admin / Categories
      </section>
      <main className="bg-white pb-[100px] w-full flex flex-col min-h-[150px] text-[14px] rounded-[7px]">
        <div className="w-full">
          <h2 className="poppins font-medium text-[16px] lg:pb-3">
            Categories
          </h2>
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
    </MainAdminLayout>
  );
}

export default Categories;
