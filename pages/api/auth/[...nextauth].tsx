import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth ({
    // configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
        // add more providers here
    ],

    // theme for a login screen
    pages: {
        signIn: "/auth/signin",
    }
})