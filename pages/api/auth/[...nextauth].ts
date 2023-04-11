import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import prisma from "@/lib/prismadb";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credential");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hasedPassword) {
          throw new Error("There is no user");
        }

        const isPassworCorrect = await bcrypt.compare(
          credentials.password,
          user.hasedPassword
        );

        if (!isPassworCorrect) {
            throw new Error("Invalid crederntial , wrong password")
        }

        return user
      },
    }),
  ],
  debug: process.env.NODE_ENV==="development",
  session: {
    strategy:'jwt'
  }, 
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET
};

export default NextAuth(authOptions);