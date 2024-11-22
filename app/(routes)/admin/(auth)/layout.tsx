import type { Metadata } from 'next';
import MainAuthSectionLayout from '../(auth)/components/layout/MainAuthSectionLayout';

export const metadata: Metadata = {
  // title: 'Private Practice | Authentication section',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae.'
  // icons: {
  //   icon: '/favicon.ico' // Path to your PNG favicon
  // }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <MainAuthSectionLayout>{children}</MainAuthSectionLayout>;
}
