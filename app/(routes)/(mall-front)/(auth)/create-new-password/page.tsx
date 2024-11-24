'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-7.png';
import { HiMiniEyeSlash, HiMiniEye } from 'react-icons/hi2';
import Logo from '@/app/assets/images/logo.png';

const CreateNewPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="hidden lg:flex justify-center items-center bg-white w-full lg:w-4/12 2xl:w-3/12">
        <div
          className="flex flex-col items-center justify-center gap-7 log-in-page-side-sales-image"
          // style={{
          //   backgroundImage: `url(${SideSalesImage})`,
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center',
          //   backgroundRepeat: 'no-repeat',
          //   width: '100%',
          //   height: '100vh'
          // }}
        >
          {/* <Image src={dummyAvatar} alt="user-icon" className="w-[400px]" /> */}
          {/* <p className="text-[16px] w-3/5 text-center font-normal poppins">
            Explore a wide range of gadgets and find the perfect tech for your
            lifestyle.
          </p> */}
        </div>
      </section>
      <section className="w-full py-[100px] lg:py-0 flex flex-col justify-center lg:w-8/12 2xl:w-9/12">
        <form className="flex flex-col w-full px-3 sm:mx-auto sm:w-[70%] md:w-[500px] text-slate-900">
          <div className="poppins flex flex-col gap-4 text-center">
            <div className="flex items-center justify-center poppins uppercase font-bold text-xl">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px] rounded-[5px]"
              />
            </div>{' '}
            <h3 className="text-lg">Create Password</h3>
            <span className="text-xs text-center">
              Enter a new password different from the previous
            </span>
          </div>
          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full">
              <section className="flex items-center text-[14px] border-[1px] border-gray-500 rounded-[5px] bg-white px-3 py-[10px] mb-5">
                <input
                  className="flex-1 focus:outline-none bg-white"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Confirm Password"
                  id="password"
                />
                <div
                  className="password-visibility cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <HiMiniEyeSlash className="eye text-slate-500 ml-2" />
                  ) : (
                    <HiMiniEye className="eye text-slate-500 ml-2" />
                  )}
                </div>
              </section>
              <section className="flex items-center text-[14px] border-[1px] border-gray-500 rounded-[5px] bg-white px-3 py-[10px] mb-5">
                <input
                  className="flex-1 focus:outline-none bg-white"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  id="password"
                />
                <div
                  className="password-visibility cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <HiMiniEyeSlash className="eye text-slate-500 ml-2" />
                  ) : (
                    <HiMiniEye className="eye text-slate-500 ml-2" />
                  )}
                </div>
              </section>
              <section className="submit-button-wrapper poppins mb-3 w-full primary-background-color hover:bg-[#FCB349] border-[1px]-[#FCB349] border-[1px] rounded-[5px]">
                <Link
                  href="/"
                  className="flex justify-center w-full px-4 submit py-3 font-normal text-[14px] text-[#FCB349] hover:text-white capitalize text-center"
                >
                  Continue
                </Link>
              </section>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateNewPassword;
