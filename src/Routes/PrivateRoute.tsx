import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { JSX } from "react";
interface AuthState {
  accessToken?: string;
  refreshToken?: string;
  isAuthenticated?: boolean;
}
interface PrivateRouteProps {
  children: JSX.Element;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const Data = useSelector((state: { auth: AuthState }) => state.auth);
  const location = useLocation();

  if (!Data.accessToken && !Data.refreshToken) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!Data.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
