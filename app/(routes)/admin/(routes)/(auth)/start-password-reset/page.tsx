'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-3.png';
import Logo from '@/app/assets/images/logo.png';

const StartPasswordReset: React.FC = () => {
  return (
    <>
      <section className="w-full py-[100px] px-3 lg:py-0 flex flex-col justify-center">
        <form className="flex flex-col w-full p-4 rounded-[7px] sm:mx-auto sm:w-[70%] md:w-[450px] text-slate-900 bg-gray-100">
          <div className="poppins flex flex-col text-center mb-3">
            <div className="flex items-center justify-center poppins uppercase font-bold text-xl">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px] rounded-[5px]"
              />
            </div>
            <h3 className="text-lg">Forgot Password</h3>
            <span className="text-xs text-center font-normal">
              Enter your registered email address
            </span>
          </div>
          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full">
              <section className="flex items-center mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="text-[14px] flex-1 focus:outline-none px-3 py-3 bg-white border-gray-500 border-[1px] rounded-[5px]"
                />
              </section>
              <section className="submit-button-wrapper poppins mb-3 w-full primary-background-color hover:bg-[#FCB349] border-[1px]-[#FCB349] border-[1px] rounded-[5px]">
                <Link
                  href="/admin/one-time-password"
                  className="text-[14px] flex justify-center w-full px-4 submit py-3 font-normal text-[#FCB349] hover:text-white capitalize text-center"
                >
                  reset password
                </Link>
              </section>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default StartPasswordReset;
