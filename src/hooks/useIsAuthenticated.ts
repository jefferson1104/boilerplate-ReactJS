import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// USE ISAUTHENTICATED HOOK
const useIsAuthenticated = () => {
  /* States */
  const [authenticated, setAuthenticated] = useState(!!Cookies.get('token'));

  /* Hooks */
  const navigate = useNavigate();

  /* Utils */
  const checkTokenExpiration = () => {
    const token = Cookies.get('token');

    if (token) {
      const decodedToken = decodeToken(token);
      const expirationTimestamp = decodedToken.exp * 1000;

      if (expirationTimestamp < Date.now()) {
        Cookies.remove('token');
        setAuthenticated(false);
      }
    } else {
      setAuthenticated(false);
    }
  };

  const decodeToken = (token: string) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
          .join('')
      );

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  /* Lifecycles */
  useEffect(() => {
    checkTokenExpiration();
  }, [authenticated, navigate]);

  /* Renders */
  return authenticated;
};

export { useIsAuthenticated };
