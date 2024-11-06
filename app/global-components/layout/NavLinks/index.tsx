import {
  HiOutlineXMark,
  HiOutlineGift,
  HiOutlineHeart,
  HiOutlineBanknotes,
  HiOutlineFolderOpen,
  HiDevicePhoneMobile,
  HiComputerDesktop,
  HiDeviceTablet,
  HiOutlineCamera,
  HiMiniHome,
  HiOutlineTruck,
  HiOutlineEllipsisHorizontalCircle
} from 'react-icons/hi2';
import { IoWatchOutline } from 'react-icons/io5';
import { CiApple } from 'react-icons/ci';
import { GiGamepad } from 'react-icons/gi';

type NavLinksProps = {
  handleNavToggle: () => void;
};

function NavLinks({ handleNavToggle }: NavLinksProps) {
  return (
    <nav className="bg-glass_light  lg:hidden fixed top-0 left-0 right-0 min-h-screen z-30 bg-white">
      <div className="flex flex-col">
        <div className="p-4">
          <HiOutlineXMark
            onClick={handleNavToggle}
            className="w-6 h-6 text-black"
          />
        </div>
        <div>
          <ul className="flex flex-col  text-lg font-semibold">
            <div className="px-4 py-2 hover:bg-[#D7D7D780]">
              <li className="capitalize poppins">my account</li>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#D7D7D780]">
              <HiOutlineGift />
              <li>Orders</li>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#D7D7D780]">
              <HiOutlineHeart />
              <li>Saved items</li>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#D7D7D780]">
              <HiOutlineFolderOpen />
              <li>Address book</li>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 mb-3 hover:bg-[#D7D7D780]">
              <HiOutlineBanknotes />
              <li>wallet</li>
            </div>
          </ul>
          <ul className="flex flex-col border-t-2">
            <h3 className="poppins text-lg font-semibold uppercase px-4 pt-4">
              categories
            </h3>
            <div className="px-4 gap-1 flex flex-col">
              <div className="flex items-center gap-1">
                <HiDevicePhoneMobile />
                <li className="cursor-pointer hover:underline">
                  phones and tablets
                </li>
              </div>
              <div className="flex items-center gap-1">
                <HiDeviceTablet />
                <li className="cursor-pointer hover:underline">Appliances</li>
              </div>
              <div className="flex items-center gap-2">
                <HiComputerDesktop />
                <li className="cursor-pointer hover:underline">Computing</li>
              </div>
              <div className="flex items-center gap-2">
                <IoWatchOutline />
                <li className="cursor-pointer hover:underline">
                  Wearable Tech
                </li>
              </div>
              <div className="flex items-center gap-2">
                <CiApple />
                <li className="cursor-pointer hover:underline">Supermarket</li>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineCamera />
                <li className="cursor-pointer hover:underline">Cameras</li>
              </div>
              <div className="flex items-center gap-2">
                <GiGamepad />
                <li className="cursor-pointer hover:underline">Gaming</li>
              </div>
              <div className="flex items-center gap-2">
                <HiMiniHome />
                <li className="cursor-pointer hover:underline">
                  Land & Properties
                </li>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineTruck />
                <li className="cursor-pointer hover:underline">Automobiles</li>
              </div>
              <div className="flex items-center gap-2">
                <HiOutlineEllipsisHorizontalCircle />
                <li className="cursor-pointer hover:underline">
                  Other Categories
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavLinks;
