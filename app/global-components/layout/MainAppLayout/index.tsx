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
    <>
      <TopNav />
      {/* Main content area */}
      <main className="main-app-layout">
        <NavBar />
        <div className="min-h-screen px-3 sm:px-[20px] md:px-[5%] xl:px-[12%] md:mx-auto text-[14px]">
          {children}
        </div>
        <Footer />
      </main>
    </>
  );
}

export default MainAppLayout;
