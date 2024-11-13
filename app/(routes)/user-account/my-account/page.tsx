import { HiPencil } from 'react-icons/hi2';

function MyAccount() {
  return (
    <>
      <main className="lg:border w-full flex flex-col lg:w-3/4 h-full text-[14px] lg:shadow-sm lg:rounded-md">
        <div className="w-full lg:border-b">
          <h2 className="poppins font-bold text-sm lg:text-lg lg:p-3">
            Account Overview
          </h2>
        </div>
        <div className="lg:p-3 w-full flex flex-col xsm:flex-row xsm:justify-between gap-4 mt-3">
          <div className="w-full h-full">
            <div className="py-1 border  h-[160px] sm:h-[180px]">
              <h2 className="poppins font-normal text-xs lg:text-base px-2 py-1 border-b">
                Account Details
              </h2>
              <div className="p-2">
                <h3 className="font-semibold">Wave Adom</h3>
                <span className="text-[10px]">iamwaveofficial@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="py-1 border h-[160px] sm:h-[180px]">
              <div className="flex justify-between px-2 py-1 border-b">
                <h2 className="poppins font-normal text-xs lg:text-base">
                  Address Book
                </h2>
                <HiPencil className="text-[#FCB349]" />
              </div>
              <div className="p-2">
                <h3 className="font-semibold">
                  Your default shipping address:
                </h3>
                <div className="text-[10px] mt-1">
                  <span className="block mb-2">Wave Adom</span>
                  <span className="block mb-2">
                    Shop G8-18 Areena market, Oshodi, Lagos
                  </span>
                  <span className="block mb-2">OSHODI-BOLADE, Lagos</span>
                  <span className="block mb-2">
                    {' '}
                    +234 8072101662 / +234 8033542913
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

export default MyAccount;
