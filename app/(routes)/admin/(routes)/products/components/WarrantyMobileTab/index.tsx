import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react';
import { HiChevronDoubleDown, HiChevronUp } from 'react-icons/hi2';

function WarrantyMobileTab() {
  return (
    <div
      key="overview-info"
      className="lg:hidden border flex flex-col justify-center bg-white mb-2 rounded-[7px] py-2"
    >
      <Disclosure>
        {({ open }: { open: boolean }) => (
          <div>
            {' '}
            <DisclosureButton className="flex w-full items-center justify-between">
              <div className="py-2  flex items-start px-2">
                <h2 className="mr-2 uppercase text-[12px] font-medium">
                  Warranty
                </h2>
              </div>
              <HiChevronUp
                className={`${open ? 'rotate-180 transform' : 'border-b-0'} default--blue_text mr-2`}
              />
            </DisclosureButton>
            <DisclosurePanel className="text-gray-500 p-2">
              This is a placeholder for details about the product such as
              dimension, color, and related content.
            </DisclosurePanel>
          </div>
        )}
      </Disclosure>
    </div>
  );
}

export default WarrantyMobileTab;
