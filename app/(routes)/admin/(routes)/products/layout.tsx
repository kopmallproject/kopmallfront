import type { Metadata } from 'next';
// import MainProductPageLayout from './components/Layout/MainProductPageLayout';

export const metadata: Metadata = {
  title: 'Kop Mall | Product Page',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, vitae.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
