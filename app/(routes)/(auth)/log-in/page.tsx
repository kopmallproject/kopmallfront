'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '../../../assets/images/img-2.png';
import goggleIcon from '../../../assets/images/img-5.png';
import appleIcon from '../../../assets/images/img-6.png';
import { HiMiniEyeSlash, HiMiniEye } from 'react-icons/hi2';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="w-full py-[100px] lg:py-0 lg:w-1/2 flex flex-col justify-center">
        <form className=" flex flex-col w-full px-3 sm:mx-auto sm:w-[70%] md:w-[60%] lg:w-[75%] text-white">
          <div className="poppins flex flex-col gap-4">
            <h2 className=" text-2xl uppercase">kop mall</h2>
            <h3 className="text-lg">Log in to your account</h3>
            <span className="text-sm">
              Welcome back! Select a method to log in
            </span>
          </div>
          <div className="auth-section mt-6 flex flex-col gap-3 w-full lg:flex-row lg:items-center lg:justify-between xl:justify-center 2xl:gap-3 text-base">
            <div className="flex items-center justify-center gap-4 border py-1 px-2 rounded-sm cursor-pointer">
              <Image
                src={goggleIcon}
                alt="user-icon"
                className="bg-cover w-5 h-5"
              />
              <span>Log in with Goggle</span>
            </div>
            <div className="flex items-center justify-center gap-4 border py-1 px-2 rounded-sm cursor-pointer">
              <Image
                src={appleIcon}
                alt="user-icon"
                className="bg-cover w-5 h-5"
              />
              <span>Log in with Apple</span>
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
                  className="flex-1 focus:outline-none  px-2 py-2 bg-[#25133A] border"
                />
              </section>
              <section className="flex items-center border bg-[#25133A] px-2 py-2 mb-3">
                <input
                  className="flex-1 focus:outline-none bg-[#25133A]"
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
              <section className="flex items-center justify-between mb-8">
                <div className="input-group for-check-box flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="terms"
                    className="cursor-pointer w-4 h-4 border-2 border-[#FCB349] rounded-sm checked:bg-[#0a66c3]checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[#FCB349]"
                  />
                  <span className="capitalize">remember me</span>
                </div>
                <Link
                  href="/forget-password"
                  className="text-right text-[#FCB349]"
                >
                  Forgot Password
                </Link>
              </section>
              <section className="submit-button-wrapper poppins mb-3 w-full hover:bg-[#FCB349] border-[#FCB349] border">
                <Link
                  href="/"
                  className=" flex justify-center w-full px-4 submit py-3 font-bold rounded text-base text-[#FCB349] hover:text-white capitalize text-center"
                >
                  log in
                </Link>
              </section>
              <section className="hidden lg:block login-option-wrapper text-center">
                <p className="opacity-100  text-slate-400 font-semibold">
                  Don't have an account?{' '}
                  <Link
                    href="/sign-up"
                    className="no-underline text-[#FCB349] font-bold"
                  >
                    Sign up
                  </Link>{' '}
                </p>
              </section>
            </div>
          </div>
        </form>
      </section>
      <section className="hidden lg:flex justify-center items-center bg-white w-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center gap-7">
          <Image src={dummyAvatar} alt="user-icon" className="w-2/4 h-2/4" />
          <p className="font-semibold text-lg w-3/5 text-center">
            Explore a wide range of gadgets and find the perfect tech for your
            lifestyle.
          </p>
        </div>
      </section>
    </>
  );
};

export default Login;
