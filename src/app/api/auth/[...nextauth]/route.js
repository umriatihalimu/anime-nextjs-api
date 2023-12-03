//ini api dri jikan untuk hubungkan ke github

import NextAuth from "next-auth";
import githubAuth from "next-auth/providers/github";

export const authOption = {
  // provider itu untk terhubung dengn akun apa
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
};

//  NextAuth() fitur bawaan nextjs
const handler = NextAuth(authOption);
export { handler as GET, handler as POST };
