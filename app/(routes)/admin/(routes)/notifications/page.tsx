'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MainAdminLayout from '../../components/layout/MainAdminLayout';
import Logo from '@/app/assets/images/52.png';
import { HiMiniPhone } from 'react-icons/hi2';
import { HiMiniEnvelope } from 'react-icons/hi2';
import { HiMiniPlus } from 'react-icons/hi2';
import NotificationOrderPreviewCard from './NotificationOrderPreviewCard';
import Emoji from './Emoji';

function NotificationsPage() {
  return (
    <MainAdminLayout>
      <section className="text-[12px] text-gray-500 mb-2">
        Admin / Notifications
      </section>
      <main className="bg-white pb-[100px] w-full flex flex-col min-h-[150px] text-[14px] rounded-[7px]">
        <div className="w-full">
          <h2 className="poppins font-medium text-[16px] pb-3">
            Notifications
          </h2>
        </div>
        <section className="notifications">
          <div className="order-notification-card p-4 flex gap-3 border-t-[1px]">
            <div className="flex gap-4">
              <Image
                src={Logo}
                alt="logo"
                className="bg-cover w-[50px] h-[50px] rounded-full"
              />
              <div className="flex flex-col justify-center mt-1">
                <div>
                  <Emoji label="celebration-emoji" symbol="🎉🎉🎉" />
                  <span className="poppins text-[14px] font-medium">
                    {' '}
                    New Order
                  </span>
                  <span className="poppins"> created by</span>
                  <span className="poppins text-[14px] font-medium">
                    {' '}
                    Boniface Mallam
                  </span>
                </div>
                <div className="event-time text-gray-400">5 minutes ago</div>
                <div className="order-preview mt-3">
                  <NotificationOrderPreviewCard />
                </div>
                <div className="action-button">
                  <Link href="/admin/orders/order-details/123">
                    <button className="mt-4 poppins font-medium rounded-[7px] secondary-background-color px-4 py-2 text-[12px]">
                      View Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="order-notification-card p-4 flex gap-3 border-t-[1px]">
            <div className="flex gap-4">
              <Image
                src={Logo}
                alt="logo"
                className="bg-cover w-[50px] h-[50px] rounded-full"
              />
              <div className="flex flex-col justify-center mt-1">
                <div>
                  <Emoji label="three(3)-celebration-emoji" symbol="🎉🎉🎉" />
                  <span className="poppins text-[14px] font-medium">
                    {' '}
                    New Order
                  </span>
                  <span className="poppins"> created by</span>
                  <span className="poppins text-[14px] font-medium">
                    {' '}
                    Boniface Mallam
                  </span>
                </div>
                <div className="event-time text-gray-400">5 minutes ago</div>
                <div className="order-preview mt-3">
                  <NotificationOrderPreviewCard />
                </div>
                <div className="action-button">
                  <Link href="/admin/orders/order-details/123">
                    <button className="mt-4 poppins font-medium rounded-[7px] secondary-background-color px-4 py-2 text-[12px]">
                      View Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="order-notification-card p-4 flex gap-3 border-t-[1px]">
            <div className="flex gap-4">
              <Image
                src={Logo}
                alt="logo"
                className="bg-cover w-[50px] h-[50px] rounded-full"
              />
              <div className="flex flex-col justify-center mt-1">
                <div>
                  <Emoji label="celebration-emoji" symbol="🎉🎉🎉" />
                  <span className="poppins text-[14px] font-medium">
                    {' '}
                    New Order
                  </span>
                  <span className="poppins"> created by</span>
                  <span className="poppins text-[14px] font-medium">
                    {' '}
                    Boniface Mallam
                  </span>
                </div>
                <div className="event-time text-gray-400">5 minutes ago</div>
                <div className="order-preview mt-3">
                  <NotificationOrderPreviewCard />
                </div>
                <div className="action-button">
                  <Link href="/admin/orders/order-details/123">
                    <button className="mt-4 poppins font-medium rounded-[7px] secondary-background-color px-4 py-2 text-[12px]">
                      View Order
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </MainAdminLayout>
  );
}

export default NotificationsPage;
