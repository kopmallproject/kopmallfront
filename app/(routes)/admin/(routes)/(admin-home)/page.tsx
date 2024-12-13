'use client';
import { useAppDispatch, useAppSelector } from '@/app/rtk-base/hooks';
import { RootState } from '@/app/rtk-base/store';
import { setActiveTab } from '@/app/rtk-base/slices/tab-slice';
import { Rating } from 'react-simple-star-rating';
import MainAdminLayout from '../../components/layout/MainAdminLayout';
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
import RenderChart from './components/RenderChart';
import TopPerformersCategoryCard from './components/TopPerformersCategoryCard';
import TopPerformersProductCard from './components/TopPerformersProductCard';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import { HiChevronRight } from 'react-icons/hi2';

function Admin() {
  const activeTab = useAppSelector((state: RootState) => state.tab.activeTab);
  const dispatch = useAppDispatch();

  const handleTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setActiveTab(e.target.value));
  };

  return (
    <MainAdminLayout>
      <section className="flex justify-between items-center text-[12px] text-gray-500 mb-2">
        <span>Admin / Dashboard home</span>
        <section className="flex gap-x-3">
          <span className="bg-blue-100 border-[1px] poppins text-black px-2 py-1 text-[11px] rounded-[10px]">
            week
          </span>
          <span className="bg-white border-[1px] poppins text-black px-2 py-1 text-[11px] rounded-[10px]">
            month
          </span>
          <span className="bg-white border-[1px] poppins text-black px-2 py-1 text-[11px] rounded-[10px]">
            year
          </span>
        </section>
      </section>
      <main className="bg-white pb-[100px] w-full flex flex-col min-h-[150px] text-[14px] rounded-[7px]">
        <div className="w-full">
          <h2 className="poppins font-medium text-[16px] pb-3">
            Dashboard Home
          </h2>
        </div>
        <div className="flex flex-col 2xl:flex-row justify-between">
          <section className="w-full 2xl:w-[70%]">
            <section className="top-metrics-section min-h-[150px] grid md:grid-cols-3 gap-4">
              <div className="p-5 flex flex-col item-center justify-between rounded-[10px] min-h-[150px] bg-slate-100">
                <div className="top flex justify-between items-center">
                  <span className="poppins">Users</span>
                  <HiUsers className="w-6 h-6" />
                </div>
                <div className="top flex flex-row gap-2">
                  <span className="poppins text-2xl lg:text-3xl">1213</span>
                  <span className="poppins self-end mb-1 text-[12px]">
                    +80 in the last week
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col item-center justify-between rounded-[10px] min-h-[150px] bg-blue-100">
                <div className="top flex justify-between items-center">
                  <span className="poppins">Products</span>
                  <HiMiniSquaresPlus className="w-6 h-6" />{' '}
                </div>
                <div className="top flex flex-row gap-2">
                  <span className="poppins text-2xl lg:text-3xl">23215</span>
                  <span className="poppins self-end mb-1 text-[12px]">
                    +34 in the last week
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col item-center justify-between rounded-[10px] min-h-[150px] bg-green-100">
                <div className="top flex justify-between items-center">
                  <span className="poppins">Stores</span>
                  <HiBuildingStorefront className="w-6 h-6" />
                </div>
                <div className="top flex flex-row gap-2">
                  <span className="poppins text-2xl lg:text-3xl">113</span>
                  <span className="poppins self-end mb-1 text-[12px]">
                    +87 in the last week
                  </span>
                </div>
              </div>
            </section>
            <section className="order-tracker-section">
              <h3 className="section-header poppins mt-6 mb-3 font-medium">
                Order Tracker
              </h3>
              <section className="flex flex-col lg:flex-row gap-6 lg:gap-4">
                <section
                  className="bg-blue-100 min-h-[450px] w-full flex justify-center rounded-[10px] 
                lg:w-1/2"
                >
                  <div className="w-full">
                    <RenderChart />
                  </div>
                </section>
                <section
                  className="bg-gray-100 min-h-[450px] w-full flex rounded-[10px] 
                lg:w-1/2 flex-col"
                >
                  <div className="px-4 pt-3 section-header poppins text-[12px] font-medium flex justify-between">
                    <span>Latest orders</span>
                    <div className="flex gap-2 items-center">
                      See all
                      <HiChevronRight className="text-[14px] font-bold" />
                    </div>
                  </div>
                  <main className="w-full flex flex-col min-h-[150px] text-[14px] gap-4 px-4 pb-4 pt-3">
                    <div className="lg:mt-0 w-full flex flex-col gap-4 text-[14px]">
                      <div className="w-full rounded-[7px] gap-3 bg-white flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
                        <div className="w-full flex items-center gap-5">
                          <div className="w-[100px] lg:w-[150px] grid grid-cols-2 gap-2">
                            <Image
                              src={dummyAvatar}
                              alt="user-icon"
                              className=" bg-cover"
                            />
                            <Image
                              src={dummyAvatar}
                              alt="user-icon"
                              className=" bg-cover"
                            />
                            <Image
                              src={dummyAvatar}
                              alt="user-icon"
                              className=" bg-cover"
                            />
                            <Image
                              src={dummyAvatar}
                              alt="user-icon"
                              className=" bg-cover"
                            />
                          </div>
                          <div className="w-full flex flex-col text-[12px]">
                            <h3 className="poppins inline-block font-medium mb-2">
                              Havic HV G-92 Gamepad
                            </h3>
                            <div className="block text-slate-400 mb-1.5">
                              Order ID: 217892
                            </div>
                            <div className="text-xs mb-1.5 text-white bg-yellow-600 px-3 self-start py-1 rounded-[7px]">
                              Active
                            </div>
                            <span className="poppins block text-[10px]">
                              21-06-2024
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center w-full justify-end">
                          <Link
                            href="/admin/orders/order-details/123"
                            className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                          >
                            See details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-0 w-full flex flex-col gap-4 text-[14px]">
                      <div className="w-full rounded-[7px] gap-3 bg-white flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
                        <div className="w-full flex items-center gap-5">
                          <div className="w-[100px] lg:w-[150px] grid grid-cols-2 gap-2">
                            <Image
                              src={dummyAvatar}
                              alt="user-icon"
                              className=" bg-cover"
                            />
                            <Image
                              src={dummyAvatar}
                              alt="user-icon"
                              className=" bg-cover"
                            />
                            <Image
                              src={dummyAvatar}
                              alt="user-icon"
                              className=" bg-cover"
                            />
                          </div>
                          <div className="w-full flex flex-col text-[12px]">
                            <h3 className="poppins inline-block font-medium mb-2">
                              Havic HV G-92 Gamepad
                            </h3>
                            <div className="block text-slate-400 mb-1.5">
                              Order ID: 217892
                            </div>
                            <div className="text-xs mb-1.5 text-white bg-yellow-600 px-3 self-start py-1 rounded-[7px]">
                              Active
                            </div>
                            <span className="poppins block text-[10px]">
                              21-06-2024
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center w-full justify-end">
                          <Link
                            href="/admin/orders/order-details/123"
                            className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                          >
                            See details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="lg:mt-0 w-full flex flex-col gap-4 text-[14px]">
                      <div className="w-full rounded-[7px] gap-3 bg-white flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
                        <div className="w-full flex items-center gap-5">
                          <div className="w-[100px] lg:w-[150px] gap-2">
                            {/* <div className="w-[100px] lg:w-[150px] grid grid-cols-2 gap-2"> */}
                            <Image
                              src={dummyAvatar}
                              alt="user-icon"
                              className=" bg-cover"
                            />
                          </div>
                          <div className="w-full flex flex-col text-[12px]">
                            <h3 className="poppins inline-block font-medium mb-2">
                              Havic HV G-92 Gamepad
                            </h3>
                            <div className="block text-slate-400 mb-1.5">
                              Order ID: 217892
                            </div>
                            <div className="text-xs mb-1.5 text-white bg-yellow-600 px-3 self-start py-1 rounded-[7px]">
                              Active
                            </div>
                            <span className="poppins block text-[10px]">
                              21-06-2024
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center w-full justify-end">
                          <Link
                            href="/admin/orders/order-details/123"
                            className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                          >
                            See details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </main>
                </section>
              </section>
            </section>
            {/* a sales tracker chat might not be necessary - leave hidden for now */}
            <section className="hidden sales-tracker-section">
              <h3 className="section-header poppins mt-6 mb-3 font-medium">
                Sales Tracker
              </h3>
              <section className="bg-green-100 w-full min-h-[450px]">
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis recusandae atque repudiandae architecto, doloribus, iusto sequi quaerat tempora repellat enim similique ducimus quis, qui possimus cupiditate libero eos itaque. */}
              </section>
            </section>
          </section>
          <section className="w-full 2xl:w-[25%] mt-4 lg:mt-0 xl:mt-5 lg:translate-y-[-12px]">
            <div className="w-full flex justify-between items-center">
              <h3 className="section-header flex mt-[9px] poppins mb-3">
                <span className="text-[14px] font-medium">Top performers</span>
                <span className="text-[14px]">(sales)</span>
              </h3>
              <div>
                <select
                  id="tabSelect"
                  name="tabSelect"
                  value={activeTab}
                  onChange={handleTabChange}
                  className="poppins w-[120px] cursor-pointer text-xs border-none rounded-md p-2 flex-1 bg-transparent text-black"
                >
                  <option value="Overview" className="text-black text-[12px]">
                    Products
                  </option>
                  <option value="Categories" className="text-black text-[12px]">
                    Categories
                  </option>
                </select>
              </div>
            </div>
            <div className="categories-wrapper grid md:grid-cols-2 2xl:grid-cols-1 gap-4 mt-2">
              {activeTab === 'Overview' &&
                Array.from({ length: 5 }).map((_, index) => (
                  <TopPerformersProductCard key={`product-${index}`} />
                ))}
              {activeTab === 'Categories' &&
                Array.from({ length: 5 }).map((_, index) => (
                  <TopPerformersCategoryCard key={`category-${index}`} />
                ))}
            </div>
          </section>
        </div>
      </main>
    </MainAdminLayout>
  );
}
export default Admin;
