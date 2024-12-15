// src/types/next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Profile {
    sub?: string;
    email?: string;
    name?: string;
    picture?: string;
  }

  interface Session {
    user: {
      id: string | undefined;
      email: string | undefined;
      name: string | undefined;
      picture: string | undefined;
    };
  }

  interface JWT {
    sub?: string; // Optional and allows undefined
    email?: string;
    name?: string;
    picture?: string;
  }
}
