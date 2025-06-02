import { signIn } from "next-auth/react";

interface GoogleSignInOptions {
  callbackUrl?: string;
}

export const googleSignIn = async (options: GoogleSignInOptions = {}) => {
  try {
    const result = await signIn("google", {
      callbackUrl: options.callbackUrl || "/",
      redirect: true,
    });
    return { success: true, result };
  } catch (error) {
    console.error("Google Sign-in Error:", error);
    return { success: false, error };
  }
};

interface GitHubSignInOptions {
  callbackUrl?: string;
}

export const githubSignIn = async (options: GitHubSignInOptions = {}) => {
  try {
    const result = await signIn("github", {
      callbackUrl: options.callbackUrl || "/",
      redirect: true,
    });
    return { success: true, result };
  } catch (error) {
    console.error("GitHub Sign-in Error:", error);
    return { success: false, error };
  }
};

// Add more auth-related utilities here as needed
export const isAuthenticated = (status: string) => status === "authenticated";
