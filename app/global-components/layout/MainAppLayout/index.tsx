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
      <main className="main-app-layout min-h-screen">
        <NavBar />
        <div className="min-h-screen md:px-[5%] md:mx-auto">{children}</div>
        <Footer />
      </main>
    </>
  );
}

export default MainAppLayout;
