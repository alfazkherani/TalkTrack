import { signIn, signOut } from "next-auth/react";

interface GoogleSignInOptions {
  callbackUrl?: string;
}

export const googleSignIn = async (options: GoogleSignInOptions = {}) => {
  try {
    const result = await signIn("google", {
      callbackUrl: options.callbackUrl || "/dashboard",
      redirect: true,
      // Force Google to show account selection even if user is already logged in
      prompt: "select_account",
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
      callbackUrl: options.callbackUrl || "/dashboard",
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

export async function handleLogout() {
  try {
    // Clear any client-side data
    localStorage.removeItem("user-preferences");
    sessionStorage.clear();

    // Sign out and redirect to login
    await signOut({
      callbackUrl: "/login",
    });
  } catch (error) {
    console.error("Logout error:", error);
    // Fallback: force redirect to login if signOut fails
    window.location.href = "/login";
  }
}
