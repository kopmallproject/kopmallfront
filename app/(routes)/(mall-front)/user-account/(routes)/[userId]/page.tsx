'use client';

import React, { useEffect, useRef, useState } from 'react';
import { HiPencil } from 'react-icons/hi2';
import Image from 'next/image';
import Link from 'next/link';
import dummyAvatar from '@/app/assets/images/img-2.png';
import goggleIcon from '@/app/assets/images/img-5.png';
import piIcon from '@/app/assets/images/img-51.png';
import { HiMiniEyeSlash, HiMiniEye } from 'react-icons/hi2';
import Logo from '@/app/assets/images/logo.png';
import SideSalesImage from '@/app/assets/images/img-9.png';

function MyAccount() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <main className="bg-white rounded-[7px] pt-5 sm:pt-6 mt-0 sm:mt-[20px] lg:mt-0 w-full flex flex-col lg:w-3/4 h-full text-[12px] xsm:text-[14px] lg:shadow-sm lg:rounded-md">
        <div className="w-full lg:border-b lg:pb-3 flex justify-between items-center px-3 sm:w-[70%] md:w-[500px] sm:mx-auto">
          <h2 className="poppins font-medium text-[16px]">Account Overview</h2>
          <button className="poppins secondary-background-color px-3 py-2 text-[12px] rounded-[5px]">
            Update Profile
          </button>
        </div>
        <form
          className="flex flex-col w-full sm:mx-auto sm:w-[70%] md:w-[500px] text-slate-900 mt-4 mb-20 px-3"
          aria-label="Update Profile Form"
        >
          <div className="w-full mt-4">
            <div className="input-section flex flex-col w-full gap-4">
              {/* First Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="poppins text-[12px] font-normal mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="text-[14px] focus:outline-none px-3 py-[10px] bg-white border-gray-300 border-[1px] rounded-[5px]"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="poppins text-[12px] font-normal mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="text-[14px] focus:outline-none px-3 py-[10px] bg-white border-gray-300 border-[1px] rounded-[5px]"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="poppins text-[12px] font-normal mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  className="text-[14px] focus:outline-none px-3 py-[10px] bg-white border-gray-300 border-[1px] rounded-[5px]"
                />
              </div>

              {/* Country Code and Phone Number */}
              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="poppins text-[12px] font-normal mb-2"
                >
                  Phone Number
                </label>
                <div className="flex gap-4">
                  <select
                    id="countryCode"
                    name="countryCode"
                    className="text-[14px] flex-1 focus:outline-none px-3 py-[10px] bg-white border-gray-300 border-[1px] rounded-[5px]"
                  >
                    <option value="+234">NG +234</option>
                    <option value="+1">US +1</option>
                    <option value="+44">CH +44</option>
                    <option value="+91">KOR +91</option>
                  </select>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter your number"
                    className="text-[14px] flex-1 focus:outline-none px-3 py-[10px] bg-white border-gray-300 border-[1px] rounded-[5px]"
                  />
                </div>
              </div>

              {/* Current Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="currentPassword"
                  className="poppins text-[12px] font-normal mb-2"
                >
                  Current Password
                </label>
                <div className="flex items-center border-[1px] border-gray-300 rounded-[5px] bg-white px-3 py-[10px]">
                  <input
                    id="currentPassword"
                    name="currentPassword"
                    className="text-[14px] flex-1 focus:outline-none bg-white"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Current password"
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
                </div>
              </div>

              {/* New Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="newPassword"
                  className="poppins text-[12px] font-normal mb-2"
                >
                  New Password
                </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  className="text-[14px] focus:outline-none px-3 py-[10px] bg-white border-gray-300 border-[1px] rounded-[5px]"
                />
              </div>

              {/* Confirm New Password */}
              <div className="flex flex-col">
                <label
                  htmlFor="confirmNewPassword"
                  className="poppins text-[12px] font-normal mb-2"
                >
                  Confirm New Password
                </label>
                <input
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  type="password"
                  placeholder="Confirm new password"
                  className="text-[14px] focus:outline-none px-3 py-[10px] bg-white border-gray-300 border-[1px] rounded-[5px]"
                />
              </div>

              {/* Submit Button */}
              <div className="submit-button-wrapper poppins mt-3 w-full primary-background-color hover:bg-[#FCB349] border-[1px]-[#FCB349] border-[1px] rounded-[5px]">
                <Link
                  href="/"
                  className="flex justify-center w-full px-4 submit py-3 font-normal text-[14px] text-[#FCB349] hover:text-white capitalize text-center"
                >
                  Save Changes
                </Link>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default MyAccount;
