import type { Metadata } from 'next';
import MainAdminLayout from './components/layout/MainAdminLayout';

export const metadata: Metadata = {
  title: 'Kop Mall | Admin Page',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
