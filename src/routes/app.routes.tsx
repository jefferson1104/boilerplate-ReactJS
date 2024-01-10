import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// CONTEXTS
import { AuthProvider } from '@contexts/auth.context';

// PAGES
import { AuthPage } from '@pages/Auth/Auth';
import { HomePage } from '@pages/Home/Home';
import { ProfilePage } from '@pages/Profile/Profile';

// UTILS
import { PrivateRoutes } from '@utils/privateRoutes';

// APP ROUTES
export const AppRoutes: React.FC = () => {
  /* Renders */
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* private routes */}
          <Route element={<PrivateRoutes />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<ProfilePage />} path="/profile" />
          </Route>

          {/* public routes */}
          <Route element={<AuthPage />} path="/auth" />

          {/* unmatched routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};
