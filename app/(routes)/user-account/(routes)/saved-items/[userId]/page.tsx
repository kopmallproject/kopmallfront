import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-47.jpg';
import { HiTrash, HiOutlineArrowSmallLeft } from 'react-icons/hi2';

function SavedItems() {
  return (
    <>
      <main className="lg:border w-full flex flex-col lg:w-3/4 text-[14px] lg:shadow-sm lg:rounded-md">
        <div className="w-full flex items-center gap-2 lg:border-b text-sm lg:text-lg lg:p-3">
          <div className="w-full hidden lg:block">
            <h2 className="poppins font-bold text-sm lg:text-lg">
              Saved Items
            </h2>
          </div>
          <Link
            href="/"
            className="flex items-center space-x-2 font-semibold capitalize poppins"
          >
            <HiOutlineArrowSmallLeft className="lg:hidden h-4 w-4" />
            <span className="lg:hidden block">Saved Items</span>
          </Link>
        </div>
        <div className="mt-6 w-full flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center">
            <Image
              src={dummyAvatar}
              alt="user-icon"
              className="bg-cover w-24 h-24"
            />
            <h3 className="font-semibold mt-2">
              You don’t have any item saved yet!
            </h3>
          </div>
          <div className="w-1/2 flex flex-col items-center justify-center gap-4">
            <p className="text-center text-[10px] sm:text-[14px]">
              Found something you like? Tap on the heart shaped icon next to the
              item to add it to your wishlist! All your saved items will appear
              here.
            </p>
            <div className="flex flex-col mb-6">
              <button className="text-black font-bold bg-[#FCB349] hover:bg-[#FF9A29] px-4 py-1 text-xs rounded-sm">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mt-3 lg:mt-0 lg:p-3 w-full flex flex-col gap-4">
          <div className="w-full border gap-3 flex flex-col sm:flex-row sm:justify-between sm:items-start p-4">
            <div className="w-full flex items-start gap-3">
              <Image
                src={dummyAvatar}
                alt="user-icon"
                className="lg:w-[100px] lg:h-[100px] bg-cover"
              />
              <div className="w-full flex flex-col gap-3">
                <h3 className="poppins inline-block font-medium">
                  Havic HV G-92 Gamepad
                </h3>
                <span className="block text-slate-400">$162</span>
                <div className="sm:hidden flex flex-col items-start gap-3">
                  <button className="text-black bg-[#FCB349] hover:bg-[#FF9A29] px-4 py-1 text-xs rounded-sm">
                    Buy Now!
                  </button>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <HiTrash />
                    <span className="text-xs font-semibold">Remove</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex flex-col  gap-3  w-full sm:items-end">
              <button className="text-black bg-[#FCB349] hover:bg-[#FF9A29] px-4 py-1 text-xs rounded-sm">
                Buy Now!
              </button>
              <div className="flex items-center gap-1 cursor-pointer">
                <HiTrash />
                <span className="text-xs font-semibold">Remove</span>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
}

export default SavedItems;
