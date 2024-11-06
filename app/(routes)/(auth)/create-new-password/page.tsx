'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '../../../assets/images/img-3.png';
import { HiMiniEyeSlash, HiMiniEye } from 'react-icons/hi2';

const CreateNewPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <section className="w-full py-[100px] lg:py-0 lg:w-1/2 flex flex-col justify-center">
        <form className=" flex flex-col w-full px-3 sm:mx-auto sm:w-[70%] md:w-[60%] lg:w-[70%] text-white">
          <div className="poppins flex flex-col gap-4">
            <h2 className="text-2xl uppercase">kop mall</h2>
            <h3 className="text-lg">Create Password</h3>
            <span className="text-sm">
              Enter a new password different from the previous
            </span>
          </div>
          <div className="w-full mt-6">
            <div className="input-section flex flex-col w-full">
              <section className="flex items-center border bg-[#25133A] px-2 py-2 mb-5">
                <input
                  className="flex-1 focus:outline-none bg-[#25133A]"
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
              <section className="flex items-center border bg-[#25133A] px-2 py-2 mb-3">
                <input
                  className="flex-1 focus:outline-none bg-[#25133A]"
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
              <section className="submit-button-wrapper poppins mt-5 w-full hover:bg-[#FCB349] border-[#FCB349] border">
                <Link
                  href="/"
                  className=" flex justify-center w-full px-4 submit py-3 font-bold rounded text-base text-[#FCB349] hover:text-white capitalize text-center"
                >
                  Continue
                </Link>
              </section>
            </div>
          </div>
        </form>
      </section>
      <section className="hidden lg:flex justify-center items-center bg-white w-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center gap-7">
          <div className="flex flex-col items-center justify-center bg-[#FCB3494D] opacity-50 rounded-full w-1/2 h-1/2">
            <Image src={dummyAvatar} alt="user-icon" className="" />
          </div>
          <p className="font-semibold text-lg w-3/5 text-center">
            Explore a wide range of gadgets and find the perfect tech for your
            lifestyle.
          </p>
        </div>
      </section>
    </>
  );
};

export default CreateNewPassword;
