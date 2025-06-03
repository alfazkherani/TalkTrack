import { ComponentType } from "react";
import { useAuth } from "@/hooks/useAuth";
import { LoadingSpinner } from "@/components/common/LoadingSpinner";

export function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>,
  redirectTo?: string
) {
  return function ProtectedRoute(props: P) {
    const { isAuthenticated, isLoading } = useAuth(redirectTo);

    if (isLoading) {
      return <LoadingSpinner fullScreen />;
    }

    if (!isAuthenticated) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
