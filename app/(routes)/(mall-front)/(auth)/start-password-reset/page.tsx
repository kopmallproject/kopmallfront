'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-3.png';
import Logo from '@/app/assets/images/logo.png';

const StartPasswordReset: React.FC = () => {
  return (
    <>
      <section className="w-full py-[100px] lg:py-0 lg:w-1/2 flex flex-col justify-center">
        <form className=" flex flex-col w-full px-3 sm:mx-auto sm:w-[70%] md:w-[500px] text-white">
          <div className="poppins flex flex-col gap-3">
            <div className="flex items-center justify-center">
              <Image
                src={Logo}
                alt="user-icon"
                className="bg-cover w-[50px] h-[50px] rounded-[5px]"
              />
            </div>
            <h3 className="text-lg poppins text-center mt-4 mb-4">
              Forgot Password
            </h3>
            <span className="text-sm text-center font-normal">
              Enter your registered email address
            </span>
          </div>
          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full">
              <section className="flex items-center mb-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="flex-1 focus:outline-none px-3 py-3 bg-[#25133A] border-[1px] rounded-[5px]"
                />
              </section>
              <section className="submit-button-wrapper poppins mb-3 w-full hover:bg-[#FCB349] border-[#FCB349] border-[1px] rounded-[5px]">
                <Link
                  href="/one-time-password"
                  className=" flex justify-center w-full px-4 submit py-3 font-normal rounded text-base text-[#FCB349] hover:text-white capitalize text-center"
                >
                  reset password
                </Link>
              </section>
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

export default StartPasswordReset;
