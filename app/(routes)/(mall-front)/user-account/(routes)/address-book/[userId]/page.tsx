import { HiPencil } from 'react-icons/hi2';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

function Address() {
  return (
    <>
      <main className="bg-white w-full flex flex-col lg:w-3/4 h-full text-[14px] px-3 py-3 sm:p-4 pb-[100px] rounded-[7px]">
        <div className="w-full lg:border-b flex justify-between items-center pb-3">
          <h2 className="poppins font-medium text-[16px]">Address Book</h2>
          <button className="poppins secondary-background-color px-3 py-2 text-[12px] rounded-[5px]">
            Add new address
          </button>
        </div>
        <div className="w-full flex flex-col md:flex-row xsm: justify-between gap-4 my-4">
          <div className="w-full md:w-1/2 border-[1px] rounded-[7px]">
            <div className="cursor-pointer flex justify-between px-2 py-2 border-b-[1px] items-center">
              <h2 className="poppins font-medium text-[14px]">Address 1</h2>
              <HiOutlinePencilSquare className="text-[25px]" />
            </div>
            <div className="px-2 py-3 text-[12px] flex gap-1 flex-col">
              <div>Wave Adom</div>
              <div>Shop G8-18 Areena market</div>
              <div>Oshodi, Lagos OSHODI-BOLADE</div>
              <div>Lagos +234 8072101662 / +234 8033542913</div>
            </div>
          </div>
          <div className="w-full md:w-1/2 border-[1px] rounded-[7px]">
            <div className="cursor-pointer flex justify-between px-2 py-2 border-b-[1px] items-center">
              <h2 className="poppins font-medium text-[14px]">Address 2</h2>
              <HiOutlinePencilSquare className="text-[25px]" />
            </div>
            <div className="px-2 py-3 text-[12px] flex gap-1 flex-col">
              <div>Wave Adom</div>
              <div>f25 Clara close</div>
              <div>Yaba</div>
              <div>Lagos +234 8072101662 / +234 8033542913</div>
            </div>
          </div>
        </div>
        <form action="" className="flex flex-col w-full">
          <div className="w-full flex flex-col items-center mb-5">
            <section className="lg:border lg:shadow-sm lg:rounded-md w-full flex flex-col gap-5 lg:h-[265px]">
              <div className="w-full lg:border-b">
                <h2 className="poppins font-medium text-[14px] px-2 py-[10px]">
                  Add new address
                </h2>
              </div>
              <div className="lg:px-3 w-full flex flex-col sm:flex-row gap-4 sm:gap-2">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full border  border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="lg:px-3 w-full flex flex-col sm:flex-row gap-4 sm:gap-2">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className="w-full border  border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Delivery Address"
                    className="w-full border border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>
              </div>
              <div className="lg:px-3 w-full flex flex-col sm:flex-row gap-4 sm:gap-2">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Region"
                    className="w-full border border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-full border border-gray-300 text-sm p-2 rounded-md"
                  />
                </div>
              </div>
            </section>
          </div>
          <section className="w-full flex justify-end">
            <button
              type="submit"
              className="px-8 bg-[#FCB349] py-3 font-bold cursor-pointer rounded-md text-xs text-black capitalize"
            >
              save
            </button>
          </section>
        </form>
      </main>
    </>
  );
}

export default Address;
