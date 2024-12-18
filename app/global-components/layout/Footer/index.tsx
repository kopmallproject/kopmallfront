import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io5';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';
import BrandImage from '@/app/assets/images/brand-image.png';

function Footer() {
  return (
    <div
      id="footer"
      className="bg-gray-300 w-full px-3 md:px-[10%] xl:px-[12%] py-20 text-gray-600 poppins"
    >
      <div className="w-full gap-6 md:gap-[80px]">
        <div className="logo-wrapper flex flex-row items-center gap-2">
          <Image
            src={BrandImage}
            alt="user-icon"
            className="bg-cover w-[50px] h-[50px] rounded-[7px]"
          />{' '}
          <div className="flex flex-col gap-y-1 poppins text-[14px] font-medium text-gray-800">
            <span>King Of Pi</span>
            <span>Mall</span>
          </div>
        </div>
        <div className="footer-content-wrapper mb-20 flex-col sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-y-[80px] mt-[50px] md:mt-[80px] flex gap-y-[45px]">
          <div className="flex flex-col gap-3">
            <h3 className="poppins text-[12px] text-gray-800 uppercase font-medium">
              Support
            </h3>
            <div className="leading-[30px] text-[14px] font-light text-gray-500">
              Tech Solutions Inc. <br /> 1234 Innovation Drive, <br /> Suite 567
              San Francisco, CA 94107 <br />
              +415 555-0198 <br />
              info@techsolutions.com
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="poppins text-[12px] text-gray-800 uppercase font-medium">
              Account
            </h3>
            <div className="text-[14px] font-light flex flex-col gap-4">
              <span>My Account</span>
              <span>Login / Register</span>
              <span>Cart</span>
              <span>Wishlist</span>
              <span>Shop</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="poppins text-[12px] text-gray-800 uppercase font-medium">
              Quick Link
            </h3>
            <div className="text-[14px] font-light flex flex-col gap-4">
              <span>Privacy Policy</span>
              <span>Terms Of Use</span>
              <span>FAQ</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="poppins text-[12px] text-gray-800 uppercase font-medium">
              Quick Link
            </h3>
            <div className="text-[14px] font-light flex flex-col gap-4">
              <span>Privacy Policy</span>
              <span>Terms Of Use</span>
              <span>FAQ</span>
              <span>Contact</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="poppins text-[12px] text-gray-800 uppercase font-medium">
              Social media
            </h3>
            <div className="flex items-center gap-5 mt-2">
              <div>
                <a href="https://twitter.com">
                  <IoLogoTwitter className="text-[25px] translate-y-[1px]" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com">
                  <IoLogoLinkedin className="text-[25px] translate-y-[1px]" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company">
                  <IoLogoInstagram className="text-[25px] translate-y-[1px]" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company">
                  <IoLogoFacebook className="text-[25px] translate-y-[1px]" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-[30px] sm:mt-0">
            <div className="poppins text-[12px] text-gray-800 uppercase font-medium">
              Subscribe to our newsletter to get updates on our latest offers!
            </div>
            <div className="search-icon mt-2 flex items-center w-full xsm:w-[350px] border border-gray-800 rounded-[7px] p-2 gap-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent newsletter-email-input outline-none px-4 py-2 md:px-2 text-gray-600 text-xs w-full"
              />
              <HiOutlinePaperAirplane className="h-8 w-8 text-gray-800" />
            </div>
          </div>
        </div>
        <div className="text-[12px] mt-[20px] text-center w-full border-t-[1px] border-gray-800 pt-[25px] text-gray-800">
          Copyright KOP Mall 2024. All right reserved
        </div>
      </div>
    </div>
  );
}
export default Footer;
