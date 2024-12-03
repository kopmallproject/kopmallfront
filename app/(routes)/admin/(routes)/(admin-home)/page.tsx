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
import TopPerformersCategoryCard from './components/TopPerformersCategoryCard';
import TopPerformersProductCard from './components/TopPerformersProductCard';

function Admin() {
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
              <section className="bg-blue-100 w-full min-h-[450px]">
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam omnis recusandae atque repudiandae architecto, doloribus, iusto sequi quaerat tempora repellat enim similique ducimus quis, qui possimus cupiditate libero eos itaque. */}
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
          <section className="w-full 2xl:w-[25%] mt-4 lg:mt-0 lg:translate-y-[-12px]">
            <div className="w-full flex justify-between items-center">
              <h3 className="section-header flex mt-[9px] poppins mb-3">
                <span className="text-[14px] font-medium">Top performers</span>
                <span className="text-[14px]">(sales)</span>
              </h3>
              <div className="">
                <select
                  id="language"
                  name="language"
                  className="poppins w-[90px] cursor-pointer text-xs border-none rounded-md p-2 flex-1 bg-transparent text-black"
                >
                  <option className="text-black text-[12px]">Products</option>
                  <option className="text-black text-[12px]">Categories</option>
                </select>
              </div>
            </div>
            <div className="categories-wrapper grid md:grid-cols-2 2xl:grid-cols-1 gap-4 mt-2">
              <TopPerformersCategoryCard />
              <TopPerformersProductCard />
            </div>
          </section>
        </div>
      </main>
    </MainAdminLayout>
  );
}
export default Admin;
