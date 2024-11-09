import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '../../../assets/images/img-7.png';
function ActiveOrders() {
  return (
    <>
      <main className="lg:border w-full  flex flex-col lg:w-3/4 min-h-[150px] text-[14px] lg:shadow-sm lg:rounded-md">
        <div className="w-full lg:border-b">
          <h2 className="poppins font-bold text-sm lg:text-lg lg:p-3">
            Orders
          </h2>
        </div>
        <div className="text-xs lg:mt-0 lg:p-3 flex gap-5 text-slate-400 mt-3">
          <Link
            href="/user-account/active-order"
            className="hover:text-[#FCB349] text-xs hover:border-b-2 hover:border-[#FCB349]"
          >
            ONGOING/DELIVERED (2)
          </Link>
          <Link
            href="/user-account/closed-order"
            className="hover:text-[#FCB349] text-xs hover:border-b-2 hover:border-[#FCB349]"
          >
            CLOSED ORDERS
          </Link>
          <button className="hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]"></button>
        </div>
        <div className="mt-3 lg:mt-0 lg:p-3 w-full flex flex-col gap-4 text-[14px]">
          <div className="w-full border gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-4">
            <div className="w-full flex items-center gap-3">
              <Image
                src={dummyAvatar}
                alt="user-icon"
                className="lg:w-[100px] lg:h-[100px] bg-cover"
              />
              <div className="w-full flex flex-col gap-3">
                <h3 className="poppins inline-block font-medium">
                  Havic HV G-92 Gamepad
                </h3>
                <span className="block text-slate-400">Order 217892</span>
                <span className="text-xs block w-20 text-white bg-[#0F4202] p-1 rounded-sm">
                  Delivered
                </span>
                <span className="poppins block">On 21-06-2024</span>
              </div>
            </div>
            <div className="flex items-center w-full justify-end">
              <button className="text-slate-400 text-xs hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]">
                SEE DETAILS
              </button>
            </div>
          </div>
        </div>
        <div className="mt-3 lg:mt-0 lg:p-3 w-full flex flex-col gap-4 text-[14px]">
          <div className="w-full border gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-4">
            <div className="w-full flex items-center gap-3">
              <Image
                src={dummyAvatar}
                alt="user-icon"
                className="lg:w-[100px] lg:h-[100px] bg-cover"
              />
              <div className="w-full flex flex-col gap-3">
                <h3 className="poppins inline-block font-medium">
                  Havic HV G-92 Gamepad
                </h3>
                <span className="block text-slate-400">Order 217892</span>
                <span className="text-xs block w-20  text-white bg-[#0F4202] p-1 rounded-sm">
                  Delivered
                </span>
                <span className="poppins block">On 21-06-2024</span>
              </div>
            </div>
            <div className="flex items-center w-full justify-end">
              <button className="text-slate-400 text-xs hover:text-[#FCB349] hover:border-b-2 hover:border-[#FCB349]">
                SEE DETAILS
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ActiveOrders;
