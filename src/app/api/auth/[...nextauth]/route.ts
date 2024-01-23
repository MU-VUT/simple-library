import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

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
        //Form validation
        const parsedCredentials = z
          .object({
            email: z.string().email({ message: "Invalid email address" }),
            password: z
              .string()
              .min(2, { message: "Password must be 2 or more characters long" })
              .max(12, {
                message: "Password must be 12 or fewer characters long",
              }),
          })
          .safeParse(credentials);
        if (parsedCredentials.success) {
          // Data fetching
          const res = await fetch(url, { cache: "no-store" });
          const user = await res.json();

          //Credentials validation
          if (
            credentials?.email == user.email &&
            credentials?.password == user.password
          ) {
            return {
              id: user.id,
              email: user.email,
            };
          } else {
            throw new Error("Invalid email/password");
          }
        } else {
          var errors: string = Object.values(
            parsedCredentials.error.flatten().fieldErrors
          )
            .map((el) => el.reduce((a, e) => a + e))
            .reduce((acc, ele) => acc + ", " + ele);

          throw new Error(errors);
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
