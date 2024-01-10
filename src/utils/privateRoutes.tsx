import { Outlet, Navigate } from 'react-router-dom';

// HOOKS
import { useIsAuthenticated } from '@hooks/useIsAuthenticated';

// PRIVATE ROUTES
export const PrivateRoutes: React.FC = () => {
  /* Hooks */
  const isAuthenticated = useIsAuthenticated();

  /* Renders */
  return isAuthenticated ? <Outlet /> : <Navigate to="/auth" />;
};
