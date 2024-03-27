import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  user: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, user }) => {
  const router = useRouter();
  return user ? children : (router.push("/"), null);
};

export default ProtectedRoute;
