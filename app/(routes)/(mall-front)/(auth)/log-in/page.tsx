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
        <form className=" flex flex-col w-full px-3 sm:mx-auto sm:w-[70%] md:w-[500px] text-slate-900">
          <div className="poppins flex flex-col gap-4 text-center">
            <div className="flex items-center justify-center poppins uppercase font-bold text-xl">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px] rounded-[5px]"
              />
            </div>
            <h3 className="text-lg">Log in to your account</h3>
            {/* <span className="text-sm">
              Welcome back! Select a method to log in
            </span> */}
          </div>
          <div className="auth-section mt-6 flex flex-col w-full lg:flex-row lg:items-center justify-center gap-3 text-base">
            <div className="flex items-center justify-center gap-4 border-[1px] border-gray-500 py-2 px-3 rounded-[5px] cursor-pointer">
              <Image
                src={goggleIcon}
                alt="user-icon"
                className="bg-cover w-5 h-5"
              />
              <span className="text-[12px] poppins">Log in with Goggle</span>
            </div>
            <div className="flex items-center justify-center gap-4 border-[1px] border-gray-500 py-2 px-3 rounded-[5px] cursor-pointer">
              <Image
                src={piIcon}
                alt="user-icon"
                className="bg-cover w-5 h-5"
              />
              <span className="text-[12px] poppins">Authenticate with Pi</span>
            </div>
          </div>
          <div className="alternative-sign-up-introduction">
            <div className="inline-flex items-center justify-center w-full">
              <div
                className="before:w-[100px] before:h-[1px] before:bg-gray-400 before:inline-block before:translate-y-2 text-[0.8em] text-[#6F7787FF] font-bold flex
                    justify-center uppercase after:w-[100px] after:h-[1px] after:bg-gray-400 after:inline-block after:translate-y-2"
              >
                <div className="px-3">or</div>
              </div>
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full">
              <section className="flex items-center mb-8">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="flex-1 focus:outline-none px-3 py-3 bg-white border-gray-500 border-[1px] rounded-[5px]"
                />
              </section>
              <section className="flex items-center border-[1px] border-gray-500 rounded-[5px] bg-white px-3 py-3 mb-3">
                <input
                  className="flex-1 focus:outline-none bg-white"
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
              <section className="text-right mb-8">
                {/* <div className="input-group for-check-box flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    className="cursor-pointer w-4 h-4 border-[1px]-2 border-[1px]-[#FCB349] rounded-sm checked:bg-[#0a66c3]checked:border-[1px]-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#FCB349]"
                  />
                  <span className="capitalize">remember me</span>
                </div> */}
                <Link
                  href="/start-password-reset"
                  className="text-right text-[#FCB349] poppins text-[12px]"
                >
                  Forgot Password
                </Link>
              </section>
              <section className="submit-button-wrapper poppins mb-3 w-full primary-background-color hover:bg-[#FCB349] border-[1px]-[#FCB349] border-[1px] rounded-[5px]">
                <Link
                  href="/"
                  className="flex justify-center w-full px-4 submit py-3 font-normal text-base text-[#FCB349] hover:text-white capitalize text-center"
                >
                  log in
                </Link>
              </section>
              <section className="block login-option-wrapper text-center poppins text-[12px]">
                <p className="opacity-100 text-slate-400">
                  Don't have an account?{' '}
                  <Link
                    href="/sign-up"
                    className="no-underline text-[#FCB349] font-normal"
                  >
                    Sign up
                  </Link>{' '}
                </p>
              </section>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
