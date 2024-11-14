'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '../../../assets/images/img-1.png';
import goggleIcon from '../../../assets/images/img-5.png';
import appleIcon from '../../../assets/images/img-6.png';
import { HiMiniEyeSlash, HiMiniEye } from 'react-icons/hi2';
import Logo from '@/app/assets/images/logo.png';
import piIcon from '../../../assets/images/img-51.png';

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="w-full py-[50px] lg:w-1/2 flex flex-col justify-center">
        <form className="flex flex-col px-3 w-full sm:mx-auto sm:w-[70%] md:w-[500px] text-white">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px] rounded-[5px]"
              />
            </div>
            <div className="text-center">
              <h3 className="text-lg font-normal poppins ">
                Select a method to create your account
              </h3>
            </div>
          </div>
          <div className="auth-section mt-6 flex flex-col gap-3 w-full lg:flex-row lg:items-center lg:justify-between xl:justify-center 2xl:gap-3 text-base">
            <div className="flex items-center justify-center gap-4 border-[1px] py-2 px-3 rounded-[5px] cursor-pointer">
              <Image
                src={goggleIcon}
                alt="user-icon"
                className="bg-cover w-5 h-5"
              />
              <span className="text-[12px] poppins">Log in with Goggle</span>
            </div>
            <div className="flex items-center justify-center gap-4 border-[1px] py-2 px-3 rounded-[5px] cursor-pointer">
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
              <section className="flex items-center justify-center mb-8">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="flex-1 focus:outline-none px-3 py-3 bg-[#25133A] border-[1px] rounded-[5px]"
                />
              </section>
              <section className="flex items-center mb-8">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="flex-1 focus:outline-none px-3 py-3 bg-[#25133A] border-[1px] rounded-[5px]"
                />
              </section>
              <section className="flex items-center mb-8">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="flex-1 focus:outline-none px-3 py-3 bg-[#25133A] border-[1px] rounded-[5px]"
                />
              </section>
              <section className="flex items-center mb-8 border rounded-[5px]">
                <select
                  name="countryCode"
                  className="px-2 py-1 focus:outline-none text-[12px] border-none bg-[#25133A] border-[1px] rounded-[5px]"
                >
                  <option className="text-[12px]" value="+234">
                    NG +234
                  </option>
                  <option className="text-[12px]" value="+1">
                    US +1
                  </option>
                  <option className="text-[12px]" value="+44">
                    CH +44
                  </option>
                  <option className="text-[12px]" value="+91">
                    KOR +91
                  </option>
                </select>
                <input
                  type=""
                  name="phoneNumber"
                  placeholder="Enter your number"
                  className="flex-1 focus:outline-none px-3 py-3 bg-[#25133A]"
                />
              </section>

              <section className="flex items-center mb-8  px-3 py-3 bg-[#25133A] border-[1px] rounded-[5px]">
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
              <section className="submit-button-wrapper poppins mb-3 w-full border-[#FCB349] hover:bg-[#FCB349] border rounded-[5px]">
                <Link
                  href="/"
                  className=" flex justify-center w-full px-4 submit py-3 font-normal rounded text-base text-[#FCB349] hover:text-white capitalize text-center"
                >
                  sign up
                </Link>
              </section>
              <section className="block login-option-wrapper text-center">
                <p className="opacity-100 text-slate-400 font-normal poppins text-[12px]">
                  Already have an account?{' '}
                  <Link
                    href="/log-in"
                    className="no-underline text-[#FCB349] font-normal"
                  >
                    Login
                  </Link>{' '}
                </p>
              </section>
            </div>
          </div>
        </form>
      </section>
      <section className="hidden lg:flex justify-center items-center bg-white w-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center gap-7">
          <Image src={dummyAvatar} alt="user-icon" className="w-[400px]" />
          <p className="text-[16px] w-3/5 text-center font-normal poppins">
            Explore a wide range of gadgets and find the perfect tech for your
            lifestyle.
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
