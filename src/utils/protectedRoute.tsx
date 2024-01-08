import React from 'react';
import { Navigate } from 'react-router-dom';

// CONTEXTS
import { useAuthContextHook } from '@contexts/auth.context';

// PROTECTED ROUTE UTILS
interface IProtectedRoute {
  children: React.ReactNode;
}

// PROTECTED ROUTE
export const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
  /* Hooks */
  const { isAuthenticated } = useAuthContextHook();

  /* Renders */
  return isAuthenticated ? <>{children}</> : <Navigate to="/auth" replace />;
};
