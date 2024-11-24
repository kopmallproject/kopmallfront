import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import { Rating } from 'react-simple-star-rating';
import { HiChevronUp } from 'react-icons/hi2';

function ReviewMobileTab() {
  return (
    <div
      key="overview-info"
      className="lg:hidden border flex flex-col justify-center bg-white py-2 rounded-[7px]"
    >
      <Disclosure>
        {({ open }: { open: boolean }) => (
          <div>
            {' '}
            <DisclosureButton className="flex w-full items-center justify-between">
              <div className="py-2 flex items-start px-2">
                <h2 className="mr-2 uppercase text-[12px] font-medium">
                  Review
                </h2>
              </div>
              <HiChevronUp
                className={`${open ? 'rotate-180 transform' : 'border-b-0'} default--blue_text mr-2`}
              />
            </DisclosureButton>
            <DisclosurePanel className="text-gray-500 p-2">
              <div className="container mx-auto p-4 bg-white w-full">
                {/* Overall Rating */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 text-center sm:text-left">
                  <div className="flex items-center space-x-2 sm:space-x-4">
                    <h1 className="text-3xl md:text-4xl font-semibold">4.5</h1>
                    <p className="text-gray-600">out of 5</p>
                  </div>
                  <Rating initialValue={4.5} readonly size={25} allowFraction />
                  <p className="text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-4">
                    88 Reviews
                  </p>
                </div>

                {/* Rating Distribution */}
                <div className="mt-4 space-y-2 border-b pb-5">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center text-sm">
                      <p className="text-gray-500 w-10 sm:w-12 text-center sm:text-left">
                        {star} star
                      </p>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2">
                        <div
                          className="bg-yellow-400 h-full"
                          style={{ width: `${star * 20}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-500">
                        {Math.floor(Math.random() * 50) + 10}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Individual Reviews */}
                <div className="mt-6 space-y-6">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="border-b pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center font-bold">
                          W
                        </div>
                        <div>
                          <p className="font-medium poppins text-[12px]">
                            Wave
                          </p>
                          <p className="text-xs text-gray-500">June 25, 2024</p>
                        </div>
                      </div>
                      <Rating
                        initialValue={3.5}
                        readonly
                        size={20}
                        allowFraction
                        className="mt-2"
                      />
                      <p className="text-gray-600 mt-2">
                        Exactly as advertised but not what I really needed. Not
                        bad.
                      </p>
                    </div>
                  ))}
                </div>

                {/* Read More */}
                <button className="mt-4 text-orange-500 font-semibold w-full sm:w-auto text-center">
                  Read more
                </button>
              </div>
            </DisclosurePanel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default ReviewMobileTab;
