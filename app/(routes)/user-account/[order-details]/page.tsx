import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '../../../assets/images/img-7.png';
import { HiArrowSmallLeft, HiPencil } from 'react-icons/hi2';

function OrderDetails() {
  return (
    <>
      <main className="lg:border w-full flex flex-col lg:w-3/4 h-full text-[14px] lg:shadow-sm lg:rounded-md">
        <div className="w-full lg:border-b py-[20px] flex items-center gap-2">
          <HiArrowSmallLeft className="lg:hidden h-8 w-8" />
          <h2 className="poppins font-bold text-sm lg:text-lg lg:px-3">
            Order Details
          </h2>
        </div>
        <div className="section-one flex flex-col gap-2  lg:p-3 border-b pb-3">
          <h3 className="text-[14px] poppins font-medium">Order no 217892</h3>
          <span className="block text-xs text-slate-500">2 items</span>
          <span className="block text-xs text-slate-500">
            Placed on 21-06-2024
          </span>
          <span className="block text-xs text-slate-500">Total: $162</span>
        </div>
        <div className="section-two lg:p-3">
          <h2 className="poppins font-semibold text-xs py-2">
            ITEMS IN YOUR ORDER
          </h2>
          <div className="rounded-md border lg:mt-0 p-3 w-full flex flex-col gap-4">
            <div>
              <span className="text-xs block w-20 mb-2 text-white bg-[#0F4202] p-1 rounded-sm">
                Delivered
              </span>
              <span className="poppins block">On 21-06-2024</span>
            </div>
            <div className="w-full gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start">
              <div className="flex items-center gap-3 w-full">
                <Image
                  src={dummyAvatar}
                  alt="user-icon"
                  className="lg:w-[100px] lg:h-[100px] w-[50px] h-[50px] bg-cover"
                />
                <div className="flex flex-col gap-3">
                  <h3 className="poppins inline-block font-medium">
                    Havic HV G-92 Gamepad
                  </h3>
                  <span className="block text-slate-400">QUANTITY: 1</span>
                  <span className="block text-xs font-bold">Total: $162</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-three lg:p-3 w-full flex flex-col xsm:flex-row xsm:justify-between gap-4 mt-3">
          <div className="w-full h-full">
            <div className="py-1 border h-[180px]">
              <h2 className="poppins font-bold text-xs px-2 py-1 border-b">
                PAYMENT INFORMATION
              </h2>
              <div className="p-2">
                <h3 className="font-semibold">Payment Method</h3>
                <span className="text-xs opacity-70">Pi Wallet</span>
                <div className="flex flex-col gap-1 mt-2">
                  <h3 className="font-semibold">Payment Method</h3>
                  <span className="block text-xs text-slate-500">
                    Items total: $162
                  </span>
                  <span className="block text-xs text-slate-500">
                    Delivery fees: $5
                  </span>
                  <span className="block text-xs text-slate-500">
                    Total: $167
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="py-1 border h-[180px]">
              <div className="flex justify-between px-2 py-1 border-b">
                <h2 className="poppins font-bold text-xs">
                  DELIVERY INFORMATION
                </h2>
              </div>
              <div className="p-2">
                <h3 className="font-semibold">Delivery Method</h3>
                <span className="text-xs opacity-70">Door Delivery</span>
                <div className="flex flex-col gap-1 mt-2">
                  <h3 className="font-semibold">Shipping Address</h3>
                  <span className="block text-xs text-slate-500">
                    Wave Adom
                  </span>
                  <span className="block text-xs text-slate-500">
                    This is a placeholder for the delivery address
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default OrderDetails;
