import {
  HiHome,
  HiShoppingBag,
  HiUsers,
  HiMegaphone,
  HiArrowLeftCircle,
  HiOutlineBell,
  HiOutlineXMark
} from 'react-icons/hi2';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';

type NavLinksProps = {
  handleNavToggle: () => void;
};

function NavLinks({ handleNavToggle }: NavLinksProps) {
  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 min-h-screen z-30 bg-white shadow-md">
      <div className="flex flex-col min-h-screen relative h-[500px] overflow-y-auto pb-[100px]">
        <div className="flex justify-between items-center px-4 py-8 bg-[#FCB349]">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-slate-400">
              <Image src={Logo} alt="logo" className="bg-cover w-10 h-10" />
            </div>
            <div className="poppins">
              <span className="font-medium">Aaron Ramsey</span>
              <span className="block text-sm">Admin</span>
            </div>
          </div>
          <div className="w-[40px] h-[40px] border rounded-full">
            <div className="flex items-center justify-center w-[40px] h-[40px] translate-x-[-1px] translate-y-[-1px]">
              <HiOutlineXMark
                onClick={handleNavToggle}
                className="w-6 h-6 text-white"
              />
            </div>
          </div>
        </div>
        <ul className="flex flex-col gap-10 mt-10">
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiHome className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Dashboard</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className=" cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiMegaphone className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Orders</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiShoppingBag className="text-[20px]" />
              <span className="text-[14px] font-light poppins">
                Add Products
              </span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiUsers className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Chat</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiOutlineBell className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Marketing</span>
            </div>
          </Link>
          <Link href="/">
            <div
              onClick={handleNavToggle}
              className="cursor-pointer flex items-center gap-2 px-4 py-3 hover:bg-[#D7D7D780] h-full"
            >
              <HiArrowLeftCircle className="text-[20px]" />
              <span className="text-[14px] font-light poppins">Logout</span>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
export default NavLinks;
