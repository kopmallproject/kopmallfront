import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import { HiChevronDoubleDown, HiChevronUp } from 'react-icons/hi2';

function DescriptionMobileTab() {
  return (
    <div
      key="overview-info"
      className="lg:hidden border flex flex-col justify-center bg-white mb-2"
    >
      <Disclosure>
        {({ open }: { open: boolean }) => (
          <div>
            {' '}
            <DisclosureButton className="flex w-full items-center justify-between">
              <div className="py-2  flex items-start px-2">
                <h2 className="mr-2 uppercase text-sm font-bold">
                  Description
                </h2>
              </div>
              <HiChevronUp
                className={`${open ? 'rotate-180 transform' : 'border-b-0'} default--blue_text mr-2`}
              />
            </DisclosureButton>
            <DisclosurePanel className="text-gray-500 p-2">
              <div className="flex flex-col mt-4 gap-6">
                {/* Specifications Table */}
                <table className="min-w-full text-sm text-left text-gray-500 border border-gray-300 rounded-md">
                  <tbody>
                    <tr className="border-b">
                      <th className="px-4 py-2 font-medium text-gray-700 whitespace-nowrap border-r">
                        Weight
                      </th>
                      <td className="px-4 py-2">1.5kg</td>
                    </tr>
                    <tr className="border-b">
                      <th className="px-4 py-2 font-medium text-gray-700 whitespace-nowrap border-r">
                        Colour
                      </th>
                      <td className="px-4 py-2">Grey</td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 font-medium text-gray-700 whitespace-nowrap border-r">
                        Brand
                      </th>
                      <td className="px-4 py-2">Sony</td>
                    </tr>
                  </tbody>
                </table>

                {/* Product Description Text */}
                <div className="flex-1 text-sm text-gray-600">
                  <h3 className="font-semibold text-gray-800 poppins">Brand</h3>
                  <p className="mt-2">
                    Sony PS4 Controller Dualshock 4 Wireless Game Pad - Red Camo
                  </p>
                  <p className="mt-2 text-xs">
                    The DualShock 4 Wireless Controller features familiar
                    controls, and incorporates several innovative features to
                    usher in a new era of interactive experiences. Its
                    definitive analog sticks and trigger buttons have been
                    improved for greater feel and sensitivity. A multi-touch,
                    clickable touch pad expands gameplay possibilities, while
                    the incorporated light bar in conjunction with the
                    PlayStation Camera allows for easy player identification and
                    screen adjustment when playing with friends in the same
                    room. The addition of the Share button makes utilizing the
                    social capabilities of the PlayStation 4 as easy as the push
                    of a button.
                  </p>
                </div>
              </div>
            </DisclosurePanel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default DescriptionMobileTab;
