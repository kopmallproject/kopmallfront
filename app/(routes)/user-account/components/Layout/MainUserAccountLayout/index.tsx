import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import NavBar from '../NavBar';

type ChildProp = {
  children: React.ReactNode;
};

function MainUserAccountLayout({ children }: ChildProp) {
  return (
    <MainAppLayout>
      <section className="w-full flex  gap-10 py-[30px] lg:py-[50px]">
        <NavBar />
        {children}
      </section>
    </MainAppLayout>
  );
}

export default MainUserAccountLayout;
