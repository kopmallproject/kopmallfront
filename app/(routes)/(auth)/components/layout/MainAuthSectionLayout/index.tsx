'use client';

type ChildProp = {
  children: React.ReactNode;
};

function MainAuthSectionLayout({ children }: ChildProp) {
  return (
    <main className="w-full min-h-screen lg:flex relative bg-[#25133A]">
      <section className="lg:flex w-full min-h-screen">{children}</section>
    </main>
  );
}

export default MainAuthSectionLayout;