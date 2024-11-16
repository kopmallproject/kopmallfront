import type { Metadata } from 'next';
import MainUserAccountLayout from './components/Layout/MainUserAccountLayout';

export const metadata: Metadata = {
  title: 'Kop Mall | User Account',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <MainUserAccountLayout>{children}</MainUserAccountLayout>;
}
