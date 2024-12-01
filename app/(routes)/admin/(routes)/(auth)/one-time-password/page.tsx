'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-4.png';
import Logo from '@/app/assets/images/logo.png';

const OneTimePassword: React.FC = () => {
  return (
    <>
      <section className="w-full py-[100px] lg:py-0 flex flex-col justify-center">
        <form className="flex flex-col w-full px-3 sm:mx-auto sm:w-[70%] md:w-[450px] text-slate-900">
          <div className="poppins flex flex-col text-center">
            <div className="flex items-center justify-center poppins uppercase font-bold text-xl">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px] rounded-[5px]"
              />
            </div>{' '}
            <h3 className="text-lg">Add Verification Code</h3>
            {/* <span className="text-sm text-center">
              Enter your registered email address
            </span> */}
          </div>
          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full">
              <section className="w-full flex items-center justify-center pt-[20px] pb-[35px] gap-10">
                <input
                  type=""
                  maxLength={1}
                  className="w-10 h-10  text-center text-black border-[1px] border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-lg"
                />
                <input
                  type=""
                  maxLength={1}
                  className="w-10 h-10 text-center text-black border-[1px] border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-lg"
                />
                <input
                  type=""
                  maxLength={1}
                  className="w-10 h-10 text-center text-black border-[1px] border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-lg"
                />
                <input
                  type=""
                  maxLength={1}
                  className="w-10 h-10 text-center text-black border-[1px] border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-lg"
                />
              </section>
              <section className="submit-button-wrapper poppins mb-3 w-full primary-background-color hover:bg-[#FCB349] border-[1px]-[#FCB349] border-[1px] rounded-[5px]">
                <Link
                  href="/admin/create-new-password"
                  className="flex justify-center w-full px-4 submit py-3 font-normal text-[14px] text-[#FCB349] hover:text-white capitalize text-center"
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
    </>
  );
};

export default OneTimePassword;
