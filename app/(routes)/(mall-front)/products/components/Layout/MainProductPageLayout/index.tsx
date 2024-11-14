import React from 'react';
import MainAppLayout from '@/app/global-components/layout/MainAppLayout';

type ChildProp = {
  children: React.ReactNode;
};

function MainProductPageLayout({ children }: ChildProp) {
  return (
    <MainAppLayout>
      <section className="w-full">{children}</section>
    </MainAppLayout>
  );
}

export default MainProductPageLayout;
