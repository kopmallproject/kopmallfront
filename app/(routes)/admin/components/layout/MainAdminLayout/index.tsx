'use client';

import React from 'react';
import NavBar from '../NavBar';

type ChildProp = {
  children: React.ReactNode;
};

function MainAdminLayout({ children }: ChildProp) {
  return (
    <main className="w-full flex min-h-screen">
      <section className="navbar-wrapper lg:min-h-screen w-full lg:w-[20%] fixed top-0 left-0 lg:pt-0 z-30 lg:relative lg:px-0">
        <NavBar />
      </section>
      <section className="w-full px-3 md:px-[5%] lg:px-0 lg:w-[75%] mx-auto lg:min-h-screen overflow-y-auto mt-24 lg:mt-32">
        {children}
      </section>
    </main>
  );
}

export default MainAdminLayout;
