// 'use client';

import React from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
import TopNav from '../TopNav';
type ChildProp = {
  children: React.ReactNode;
};

function MainAppLayout({ children }: ChildProp) {
  return (
    <main className="relative z-20">
      <TopNav />
      {/* Main content area */}
      <div className="main-app-layout">
        <NavBar />
        <div className="min-h-screen px-3 sm:px-[20px] md:px-[5%] lg:px-[10%] xl:px-[12%] 2xl:px-[17%] md:mx-auto text-[12px] xsm:text-[14px] bg-gray-100 relative">
          {children}
        </div>
        <Footer />
      </div>
    </main>
  );
}

export default MainAppLayout;
