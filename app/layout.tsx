// 'use client';

import type { Metadata } from 'next';
import './styles/globals.css';
import { nunito_sans, poppins } from './utils/font';
import { Providers } from './rtk-base/provider';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en" className={`${nunito_sans} ${poppins}`}>
        <body className="nunito_sans">{children}</body>
      </html>
    </Providers>
  );
}
