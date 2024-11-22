import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';
import NavBar from '../NavBar';

type ChildProp = {
  children: React.ReactNode;
};

function MainUserAccountLayout({ children }: ChildProp) {
  return (
    <MainAppLayout>
      <section className="w-full flex gap-10 py-4 sm:py-6 md:py-8">
        <NavBar />
        {children}
      </section>
    </MainAppLayout>
  );
}

export default MainUserAccountLayout;
