'use client';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import MainAdminLayout from '../../components/layout/MainAdminLayout';
import Logo from '@/app/assets/images/img-22.png';
import { HiMiniPhone } from 'react-icons/hi2';
import { HiMiniEnvelope } from 'react-icons/hi2';
import UserProfileCard from './components/UserProfileCard';

function Users() {
  return (
    <MainAdminLayout>
      <section className="text-[12px] text-gray-500 mt-2 mb-4">
        Admin / Users / Order-details
      </section>
      <main className="bg-white pb-[100px] w-full flex flex-col min-h-[150px] text-[14px] rounded-[7px]">
        <div className="w-full">
          <h2 className="poppins font-medium text-[16px] lg:pb-3">Users</h2>
        </div>
        <section className="users-wrapper grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
          <UserProfileCard />
        </section>
      </main>
    </MainAdminLayout>
  );
}

export default Users;
