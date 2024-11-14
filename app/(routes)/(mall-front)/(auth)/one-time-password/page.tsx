'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '../../../assets/images/img-4.png';
import Logo from '@/app/assets/images/logo.png';

const OneTimePassword: React.FC = () => {
  return (
    <>
      <section className="w-full py-[100px] lg:py-0 lg:w-1/2  flex flex-col justify-center">
        <form className=" flex flex-col w-full px-3 sm:mx-auto sm:w-[70%] md:w-[500px] text-white">
          <div className="poppins flex flex-col gap-4">
            <div className="flex items-center justify-center">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px] rounded-[5px]"
              />
            </div>{' '}
            <h3 className="text-lg text-center">Add Verification Code</h3>
            <span className="text-sm text-center">
              Enter your registered email address
            </span>
          </div>
          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full">
              <section className="w-full flex items-center justify-center pt-[30px] pb-[50px] gap-10">
                <input
                  type=""
                  maxLength={1}
                  className="w-10 h-10  text-center text-black border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-lg"
                />
                <input
                  type=""
                  maxLength={1}
                  className="w-10 h-10 text-center text-black border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-lg"
                />
                <input
                  type=""
                  maxLength={1}
                  className="w-10 h-10 text-center text-black border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-lg"
                />
                <input
                  type=""
                  maxLength={1}
                  className="w-10 h-10 text-center text-black border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-lg"
                />
              </section>
              <section className="submit-button-wrapper poppins mb-3 w-full hover:bg-[#FCB349] border-[#FCB349] border">
                <Link
                  href="/create-new-password"
                  className=" flex justify-center w-full px-4 submit py-3 font-normal rounded text-base text-[#FCB349] hover:text-white capitalize text-center"
                >
                  reset password
                </Link>
              </section>
              <button className="text-center block text-xs">
                Resend code in 38s
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className="hidden lg:flex justify-center items-center bg-white w-full lg:w-1/2">
        <div className="flex flex-col items-center justify-center bg-[#FCB3494D] opacity-50 rounded-full">
          <Image src={dummyAvatar} alt="user-icon" className="w-[400px]" />
        </div>
      </section>
    </>
  );
};

export default OneTimePassword;
