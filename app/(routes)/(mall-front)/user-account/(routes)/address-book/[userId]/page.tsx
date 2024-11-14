import { HiPencil } from 'react-icons/hi2';

function Address() {
  return (
    <>
      <main className="w-full flex flex-col lg:w-3/4 h-full text-[14px]">
        <form action="" className="flex flex-col w-full">
          <div className="w-full flex flex-col items-center mb-5">
            <section className="lg:border lg:shadow-sm lg:rounded-md w-full flex flex-col gap-5 lg:h-[265px]">
              <div className="w-full lg:border-b lg:py-3">
                <h2 className="poppins font-bold text-sm lg:text-lg lg:px-3">
                  Edit Address
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
