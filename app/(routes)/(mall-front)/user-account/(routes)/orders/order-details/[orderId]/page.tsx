import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import { HiArrowLongLeft, HiPencil } from 'react-icons/hi2';

function OrderDetails() {
  return (
    <>
      <main className="bg-white rounded-[7px] px-3 md:px-4 pt-3 pb-[100px] w-full flex flex-col lg:w-3/4 h-full text-[14px]">
        <div className="w-full border-b-[1px] flex items-center gap-2">
          <HiArrowLongLeft className="hidden h-8 w-8" />
          <h2 className="poppins font-medium text-[16px] py-1">
            Order Details
          </h2>
        </div>
        <div className="section-one flex flex-col gap-2 pb-3 mt-3">
          <h3 className="text-[12px] flex gap-2">
            <span className="poppins font-medium">Order No:</span>
            <span>217892</span>
          </h3>
          <div className="poppins font-medium text-[12px]">3 items</div>
          <div className="text-[12px] flex gap-2">
            <span className="poppins font-medium">Place on:</span>
            <span>21-06-2024</span>
          </div>
          <div className="text-[12px] flex gap-2">
            <span className="poppins font-medium"> Total:</span>
            <span>$162</span>
          </div>
        </div>
        <div className="section-two">
          <h2 className="poppins font-medium text-[14px] py-2 mt-1 mb-4 border-b-[1px]">
            Items in your order
          </h2>
          <div className="lg:mt-0 w-full flex flex-col gap-3 text-[14px]">
            <div className="w-full border-[1px] rounded-[7px] gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
              <div className="w-full flex items-center gap-5">
                <div className="w-[100px] lg:w-[150px]">
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
                  href="/products/123"
                  className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                >
                  View product
                </Link>
              </div>
            </div>
            <div className="w-full border-[1px] rounded-[7px] gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
              <div className="w-full flex items-center gap-5">
                <div className="w-[100px] lg:w-[150px]">
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
                  href="/products/123"
                  className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                >
                  View product
                </Link>
              </div>
            </div>
            <div className="w-full border-[1px] rounded-[7px] gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-2 xm:px-4">
              <div className="w-full flex items-center gap-5">
                <div className="w-[100px] lg:w-[150px]">
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
                  href="/products/123"
                  className="poppins secondary-text-color lg:text-gray-400  text-[12px] hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"
                >
                  View product
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="section-three w-full flex flex-col xsm:flex-row xsm:justify-between gap-4 mt-4">
          <div className="payment-information w-full md:w-1/2 border-[1px] rounded-[7px]">
            <h2 className="poppins font-medium text-[14px] px-2 py-2 border-b-[1px]">
              Payment information
            </h2>
            <div className="p-2">
              <h3 className="font-medium text-[12px] poppins">
                Payment Method
              </h3>
              <span className="text-xs opacity-70">Pi Wallet</span>
              <div className="flex flex-col gap-1 mt-2">
                <h3 className="font-medium text-[12px] poppins">
                  Payment Breakdown
                </h3>
                <div className="text-[12px] flex gap-2">
                  <span className="poppins font-normal">Items total:</span>
                  <span>$162</span>
                </div>
                <div className="text-[12px] flex gap-2">
                  <span className="poppins font-normal">Delivery fees:</span>
                  <span>$5</span>
                </div>
                <div className="text-[12px] flex gap-2">
                  <span className="poppins font-normal"> Total:</span>
                  <span>$167</span>
                </div>
              </div>
            </div>
          </div>

          <div className="delivery-information w-full md:w-1/2 border-[1px] rounded-[7px]">
            <h2 className="poppins font-medium text-[14px] px-2 py-2 border-b-[1px]">
              Delivery information
            </h2>
            <div className="p-2">
              <h3 className="font-medium text-[12px] poppins">
                Delivery Method
              </h3>
              <span className="text-xs opacity-70">Door Delivery</span>
              <div className="flex flex-col gap-1 mt-2">
                <h3 className="font-medium text-[12px] poppins">
                  Shipping Address
                </h3>
                <span className="block text-xs text-slate-500">Wave Adom</span>
                <span className="block text-xs text-slate-500">
                  This is a placeholder for the delivery address
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default OrderDetails;
