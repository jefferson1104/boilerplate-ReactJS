import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// CONTEXTS
import { AuthProvider } from '@contexts/auth.context';

// PAGES
import { AuthPage } from '@pages/Auth/Auth';
import { HomePage } from '@pages/Home/Home';
import { ProfilePage } from '@pages/Profile/Profile';

// UTILS
import { isAuthenticated } from '@utils/isAuthenticated';

// APP ROUTES
export const AppRoutes: React.FC = () => {
  /* Utils */
  const privateRoute = (element: React.ReactNode) => {
    return isAuthenticated ? <>{element}</> : <Navigate to="/auth" replace />;
  };

  /* Renders */
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={privateRoute(<HomePage />)} />
          <Route path="/profile" element={privateRoute(<ProfilePage />)} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
