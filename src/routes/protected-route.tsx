import { useState } from "react";
import { Navigate } from "react-router";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  if (!isAuthenticated) return <Navigate to="/auth" replace />;
  
  // return <ErrorPage {...ERRORS.FORBIDDEN}/>;

  return <>{children}</>;
}
