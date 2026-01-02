import ErrorPage from "@/components/page/error-page";
import { useAuthStore } from "@/stores/auth-store";
import { ERRORS, ROUTES } from "@/utils/constants";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRoles?: string[];
};

export default function ProtectedRoute({
  children,
  allowedRoles,
}: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuthStore();

  // check if signed in
  if (!isAuthenticated || !user) return <Navigate to={ROUTES.LOGIN} replace />;

  // check if authorized
  if (
    allowedRoles &&
    !allowedRoles.some((allowedRole) => allowedRole === user.role)
  ) {
    return <ErrorPage {...ERRORS.FORBIDDEN} />;
  }

  return <>{children}</>;
}
