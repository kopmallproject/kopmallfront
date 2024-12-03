'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-2.png';
import goggleIcon from '@/app/assets/images/img-5.png';
import piIcon from '@/app/assets/images/img-51.png';
import { HiMiniEyeSlash, HiMiniEye } from 'react-icons/hi2';
import Logo from '@/app/assets/images/logo.png';
import SideSalesImage from '@/app/assets/images/img-9.png';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="w-full py-[100px] px-3 lg:py-0 flex flex-col justify-center">
        <form className=" flex flex-col w-full p-4 rounded-[7px] sm:mx-auto sm:w-[70%] md:w-[375px] text-slate-900 bg-gray-100">
          <div className="poppins flex flex-col text-center mb-3">
            <div className="flex items-center justify-center poppins uppercase font-bold text-xl">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px] rounded-[5px]"
              />
            </div>
            <h3 className="text-lg">Admin Login</h3>
          </div>

          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full">
              <section className="flex items-center mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="text-[14px] flex-1 focus:outline-none px-3 py-[10px] bg-white border-gray-500 border-[1px] rounded-[5px]"
                />
              </section>
              <section className="flex items-center border-[1px] border-gray-500 rounded-[5px] bg-white px-3 py-[10px] mb-3">
                <input
                  className="text-[14px] flex-1 focus:outline-none bg-white"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  id="password"
                />
                <div
                  className="password-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <HiMiniEyeSlash className="eye text-slate-500 ml-2" />
                  ) : (
                    <HiMiniEye className="eye text-slate-500 ml-2" />
                  )}
                </div>
              </section>
              <section className="text-right mb-2">
                {/* <div className="input-group for-check-box flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    className="cursor-pointer w-4 h-4 border-[1px]-2 border-[1px]-[#FCB349] rounded-sm checked:bg-[#0a66c3]checked:border-[1px]-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#FCB349]"
                  />
                  <span className="capitalize">remember me</span>
                </div> */}
                <Link
                  href="/admin/start-password-reset"
                  className="text-right text-[#FCB349] poppins text-[12px]"
                >
                  Forgot Password
                </Link>
              </section>
              <section className="submit-button-wrapper poppins mt-3 mb-3 w-full primary-background-color hover:bg-[#FCB349] border-[1px]-[#FCB349] border-[1px] rounded-[5px]">
                <Link
                  href="/admin"
                  className="flex justify-center w-full px-4 submit py-3 font-normal text-[14px] text-[#FCB349] hover:text-white capitalize text-center"
                >
                  log in
                </Link>
              </section>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
