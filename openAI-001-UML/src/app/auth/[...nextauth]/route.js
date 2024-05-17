import NextAuth from "next-auth/next";
import { CredentialsProvider } from "next-auth/providers/credentials";
import Email from "next-auth/providers/email";

const handler = NextAuth({
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/auth/error",
    verifyRequest: "/auth-verify-request",
    newUser: "/join",
  },
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      Credentials: {
        email: {
          label: "이메일",
          type: "email",
          placeholdrt: "Email 을 입력하세요",
        },
        password: {
          label: "비밀번호",
          type: "password",
          placeholdrt: "비밀번호 를 입력하세요",
        },
      },
      async authorize(_, req) {
        const user = {
          id: "1",
          name: "yeonsu",
          email: "rito1205@naver.com",
          password: "12345",
        };
        if (user) return user;
        else return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST }; // 핸들러를 누군가가 get이나 post 로 요청하면
