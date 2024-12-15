'use client';

import type { Metadata } from 'next';

import './styles/globals.css';
import { nunito_sans, poppins } from './utils/font';
import { Providers } from './rtk-base/provider'; // Custom provider component
import { SessionProvider } from 'next-auth/react'; // Import SessionProvider

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      {/* Wrap the layout with SessionProvider */}
      <SessionProvider>
        <html lang="en" className={`${nunito_sans} ${poppins}`}>
          <body className="nunito_sans">{children}</body>
        </html>
      </SessionProvider>
    </Providers>
  );
}
