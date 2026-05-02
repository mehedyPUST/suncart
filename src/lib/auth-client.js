import { createAuthClient } from "better-auth/react";


export const authClient = createAuthClient({
    baseURL: "https://suncart-gamma.vercel.app/"
})

export const { signIn, signUp, signOut, useSession } = createAuthClient()