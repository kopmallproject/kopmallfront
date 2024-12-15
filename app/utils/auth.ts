import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId:
        process.env.GOOGLE_CLIENT_ID ??
        (() => {
          throw new Error('GOOGLE_CLIENT_ID is missing');
        })(),
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET ??
        (() => {
          throw new Error('GOOGLE_CLIENT_SECRET is missing');
        })(),
      authorization: {
        params: {
          scope: 'openid email profile', // Explicitly set the required scopes
          prompt: 'select_account' // Ensures the account selection prompt
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/(routes)/(mall-front)/(auth)/log-in',
    newUser: '/(routes)/(mall-front)/(auth)/sign-up'
  },
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.sub = profile.sub ?? undefined; // Assign undefined if missing
        token.email = profile.email ?? undefined;
        token.name = profile.name ?? undefined;
        token.picture = profile.picture ?? undefined;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub ?? undefined; // Assign undefined if missing
      session.user.email = token.email ?? undefined;
      session.user.name = token.name ?? undefined;
      session.user.picture = token.picture ?? undefined;
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
