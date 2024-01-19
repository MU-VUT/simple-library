import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const url = "http://localhost:4000/users";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const res = await fetch(url, { cache: "no-store" });
        const user = await res.json();

        if (
          credentials?.email == user.email &&
          credentials?.password == user.password
        ) {
          return {
            id: user.id,
            email: user.email,
          };
        }

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
