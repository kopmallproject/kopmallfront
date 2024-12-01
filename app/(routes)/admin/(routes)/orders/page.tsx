'use client';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import { useAppDispatch, useAppSelector } from '@/app/rtk-base/hooks';
import { RootState } from '@/app/rtk-base/store';
import { setActiveTab } from '@/app/rtk-base/slices/tab-slice';
import ActiveOrdersComponent from './components/ActiveOrders';
import ClosedOrders from './components/ClosedOrders';
import CompletedOrders from './components/CompletedOrders';
import MainAdminLayout from '../../components/layout/MainAdminLayout';

function Orders() {
  const activeTab = useAppSelector((state: RootState) => state.tab.activeTab);
  const dispatch = useAppDispatch();
  return (
    <MainAdminLayout>
      <section className="text-[12px] text-gray-500 mt-2 mb-4">
        Admin / Orders
      </section>
      <main className="bg-white pb-[100px] w-full flex flex-col min-h-[150px] text-[14px] rounded-[7px]">
        <div className="w-full">
          <h2 className="poppins font-medium text-[16px] lg:pb-3">
            Orders (26)
          </h2>
        </div>
        <div className="text-xs mt-3 lg:mt-0 lg:pt-3 pb-3 flex justify-between lg:gap-8 lg:justify-start  text-slate-400">
          {/* <Link
            href="/user-account/active-order"
            className="poppins hover:text-[#FCB349] text-xs hover:border-b-2 hover:border-[#FCB349] h-[20px]"
          >
            Ongoing/Delivered (2)
          </Link>
          <Link
            href="/user-account/closed-order"
            className="poppins hover:text-[#FCB349] text-xs hover:border-b-2 hover:border-[#FCB349] h-[20px]"
          >
            Closed Orders
          </Link> */}
          <button
            onClick={() => dispatch(setActiveTab('Overview'))}
            className={`w-1/3 text-center pr-4 py-1 font-medium ${
              activeTab === 'Overview'
                ? 'text-[#FDAF3E]'
                : 'text-gray-700 border-transparent'
            } border-b-2 hover:border-[#FDAF3E] focus:outline-none poppins`}
          >
            Active Orders (2)
          </button>
          <button
            onClick={() => dispatch(setActiveTab('Closed'))}
            className={`w-1/3 text-center px-4 py-1 font-medium ${
              activeTab === 'Closed'
                ? 'text-[#FDAF3E]'
                : 'text-gray-700 border-transparent'
            } border-b-2 hover:border-[#FDAF3E] focus:outline-none poppins`}
          >
            Closed Orders(7)
          </button>
          <button
            onClick={() => dispatch(setActiveTab('Successful'))}
            className={`w-1/3 text-center px-4 py-1 font-medium ${
              activeTab === 'Successful'
                ? 'text-[#FDAF3E]'
                : 'text-gray-700 border-transparent'
            } border-b-2 hover:border-[#FDAF3E] focus:outline-none poppins`}
          >
            Successful Orders(17)
          </button>
          <button className="hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"></button>
        </div>
        <div className="flex flex-col gap-3 lg:gap-4 w-full">
          {/* Tab Content */}
          <div className="w-full pt-3">
            {activeTab === 'Overview' && <ActiveOrdersComponent />}
            {activeTab === 'Closed' && <ClosedOrders />}
            {activeTab === 'Successful' && <CompletedOrders />}
          </div>
          {/* <div className="lg:mt-0 w-full flex flex-col gap-4 text-[14px]">
            <div className="w-full border-[1px] rounded-[7px] gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
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
                  <div className="text-xs mb-1.5 text-white bg-green-600 px-3 self-start py-1 rounded-[7px]">
                    Delivered
                  </div>
                  <span className="poppins block text-[10px]">21-06-2024</span>
                </div>
              </div>
              <div className="flex items-center w-full justify-end">
                <Link
                  href="/user-account/orders/order-details/123"
                  className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                >
                  See details
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 w-full flex flex-col gap-4 text-[14px]">
            <div className="w-full border-[1px] rounded-[7px] gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
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
                  <div className="text-xs mb-1.5 text-white bg-green-600 px-3 self-start py-1 rounded-[7px]">
                    Delivered
                  </div>
                  <span className="poppins block text-[10px]">21-06-2024</span>
                </div>
              </div>
              <div className="flex items-center w-full justify-end">
                <Link
                  href="/user-account/orders/order-details/123"
                  className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                >
                  See details
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 w-full flex flex-col gap-4 text-[14px]">
            <div className="w-full border-[1px] rounded-[7px] gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
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
                  <div className="text-xs mb-1.5 text-white bg-green-600 px-3 self-start py-1 rounded-[7px]">
                    Delivered
                  </div>
                  <span className="poppins block text-[10px]">21-06-2024</span>
                </div>
              </div>
              <div className="flex items-center w-full justify-end">
                <Link
                  href="/user-account/orders/order-details/123"
                  className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                >
                  See details
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </main>
    </MainAdminLayout>
  );
}

export default Orders;
