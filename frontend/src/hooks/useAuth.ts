import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface UseAuthResult {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  } | null;
}

export function useAuth(redirectTo: string = "/login"): UseAuthResult {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(redirectTo);
    }
  }, [status, router, redirectTo]);

  return {
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
    user: session?.user || null,
  };
}
