import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// SERVICES
import { AuthService } from '@services/auth.service';

// UTILS
import { JWTDecode } from '@utils/JWTDecode';
import { IFirebaseSignInToken, IFirebaseUser } from '@interfaces/auth';

// AUTH CONTEXT UTILS
interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  isAuthError: boolean;
  isAuthLoading: boolean;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  signInWithGithub: () => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  user?: IFirebaseUser;
  userToken?: string;
}

// AUTH CONTEXT
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// AUTH PROVIDER
const AuthProvider = ({ children }: IAuthProviderProps) => {
  /* States */
  const [user, setUser] = useState<IFirebaseUser>();
  const [isAuthError, setIsAuthError] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | undefined>(Cookies.get('token'));

  /* Hooks */
  const navigate = useNavigate();

  /* Handlers */
  const signInWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
    await AuthService.signInWithEmailAndPassword(email, password);
  };

  const signInWithGithub = async (): Promise<void> => {
    try {
      setIsAuthLoading(true);
      setIsAuthError(false);
      const response = await AuthService.signInWithGithub();

      if (!response.user) {
        setIsAuthError(true);
        return;
      }

      const data = response.user as unknown as IFirebaseSignInToken;
      const user = JWTDecode(data.accessToken);

      Cookies.set('token', data.accessToken, { expires: user.exp / 1000 });
      setUserToken(data.accessToken);
      setUser(user);
      navigate('/');
    } catch (error) {
      console.error('signInWithGithub() Error', error);
      setIsAuthError(true);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const signInWithGoogle = async (): Promise<void> => {
    try {
      setIsAuthLoading(true);
      setIsAuthError(false);
      const response = await AuthService.signInWithGoogle();

      if (!response.user) {
        setIsAuthError(true);
        return;
      }

      const data = response.user as unknown as IFirebaseSignInToken;
      const user = JWTDecode(data.accessToken);

      Cookies.set('token', data.accessToken, { expires: user.exp / 1000 });
      setUserToken(data.accessToken);
      setUser(user);
      navigate('/');
    } catch (error) {
      console.error('signInWithGoogle() Error', error);
      setIsAuthError(true);
    } finally {
      setIsAuthLoading(false);
    }
  };

  /* LifeCycles */
  useEffect(() => {
    const token = Cookies.get('token');
    setUserToken(token);

    if (token) {
      const user = JWTDecode(token);
      setUser(user);
    }
  }, [userToken]);

  /* Render */
  return (
    <AuthContext.Provider
      value={{
        signInWithGithub,
        signInWithGoogle,
        signInWithEmailAndPassword,
        isAuthLoading,
        isAuthError,
        userToken,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// USE AUTH CONTEXT HOOK
const useAuthContextHook = () => {
  const context = useContext(AuthContext);
  return context;
};

export { useAuthContextHook, AuthProvider };
