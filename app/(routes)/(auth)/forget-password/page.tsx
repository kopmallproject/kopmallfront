'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '../../../assets/images/img-3.png';

const ForgetPassword: React.FC = () => {
  return (
    <>
      <section className="w-full py-[100px] lg:py-0 lg:w-1/2  flex flex-col justify-center">
        <form className=" flex flex-col w-full px-3 sm:mx-auto sm:w-[70%] md:w-[60%] lg:w-[70%] text-white">
          <div className="poppins flex flex-col gap-4">
            <h2 className=" text-2xl uppercase">kop mall</h2>
            <h3 className="text-lg">Forgot Password</h3>
            <span className="text-sm">Enter your registered email address</span>
          </div>
          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full">
              <section className="flex items-center mb-12">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="flex-1 focus:outline-none  px-2 py-2 bg-[#25133A] border"
                />
              </section>
              <section className="submit-button-wrapper poppins mb-3 w-full hover:bg-[#FCB349] border-[#FCB349] border">
                <Link
                  href="/one-time-password"
                  className=" flex justify-center w-full px-4 submit py-3 font-bold rounded text-base text-[#FCB349] hover:text-white capitalize text-center"
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
          <Image src={dummyAvatar} alt="user-icon" className="" />
        </div>
      </section>
    </>
  );
};

export default ForgetPassword;
