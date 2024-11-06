import { HiOutlinePaperAirplane } from 'react-icons/hi2';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io5';
function Footer() {
  return (
    <div className="bg-[#25133A] w-full px-3 md:px-[5%] py-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-5 w-full gap-6 md:gap-8 lg:gap-20">
        <div className="flex flex-col gap-3">
          <h3 className="uppercase text-xl font-bold poppins">kop mall</h3>
          <span className="block text-base">Subscribe</span>
          <span>Get 10% off your first order</span>
          <div className="search-icon mt-5 flex items-center w-3/4 sm:w-1/4 md:w-full border border-gray-300 rounded-md p-2 gap-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none px-4 py-2 md:px-2 text-gray-300 text-xs"
            />
            {/* <HiOutlinePaperAirplane className="h-8 w-8 text-white" /> */}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="poppins text-xl font-bold">Support</h3>
          <span className="inline-block">
            This is a placeholder for the office address
          </span>
          <span className="inline-block">kopmall@mail.com</span>
          <span className="inline-block">+234 --------------</span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="poppins text-xl font-bold">Account</h3>
          <span className="inline-block">My Account</span>
          <span className="inline-block">Login / Register</span>
          <span className="inline-block">Cart</span>
          <span className="inline-block">Wishlist</span>
          <span className="inline-block">Shop</span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="poppins text-xl font-bold">Quick Link</h3>
          <span className="inline-block">Privacy Policy</span>
          <span className="inline-block">Terms Of Use</span>
          <span className="inline-block">FAQ</span>
          <span className="inline-block">Contact</span>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="poppins text-xl font-bold">Social media</h3>
          <span className="inline-block">Connect with us</span>
          <div className="flex items-center gap-3">
            <div>
              <a href="https://twitter.com">
                <IoLogoTwitter className="text-[17px] translate-y-[1px]" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com">
                <IoLogoLinkedin className="text-[16.5px] translate-y-[1px]" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company">
                <IoLogoInstagram className="text-[16.5px] translate-y-[1px]" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company">
                <IoLogoFacebook className="text-[16.5px] translate-y-[1px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
