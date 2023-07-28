import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@utils/db";
import User from "@models/user";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectDB();

        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isMatch) {
              return user;
            } else {
              throw new Error("Password not match");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
