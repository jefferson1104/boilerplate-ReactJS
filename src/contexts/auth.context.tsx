import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// INTERFACES
import { IFirebaseAutheticatedUser } from '@interfaces/auth';

// SERVICES
import { AuthService } from '@services/auth';

// UTILS
import { firebaseAuth } from '@utils/firebase';

// AUTH CONTEXT UTILS
interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  isAuthLoading: boolean;
  refreshAuth: () => Promise<void>;
  signInWithEmailAndPassword: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  user: IFirebaseAutheticatedUser;
}

// AUTH CONTEXT
const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// AUTH PROVIDER
const AuthProvider = ({ children }: IAuthProviderProps) => {
  /* States */
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);
  const [user, setUser] = useState<IFirebaseAutheticatedUser>({} as IFirebaseAutheticatedUser);

  /* Hooks */
  const navigate = useNavigate();

  /* Handlers */
  const signInWithEmailAndPassword = async (email: string, password: string): Promise<void> => {
    await AuthService.signInWithEmailAndPassword(email, password);
  };

  const signInWithGoogle = async (): Promise<void> => {
    try {
      setIsAuthLoading(true);
      const authResponse = await AuthService.signInWithGoogle();
      setUser(authResponse);
      navigate('/profile');
    } catch (error) {
      console.error('signInWithGoogle() Error', error);
      setUser({} as IFirebaseAutheticatedUser);
    } finally {
      setIsAuthLoading(false);
    }
  };

  const refreshAuth = async (): Promise<void> => {
    firebaseAuth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
      } else {
        setUser({} as IFirebaseAutheticatedUser);
        localStorage.setItem('isAuthenticated', JSON.stringify(false));
      }
    });
  };

  /* Lifecycles */
  useEffect(() => {
    refreshAuth();
  }, []);

  /* Render */
  return (
    <AuthContext.Provider value={{ isAuthLoading, signInWithGoogle, signInWithEmailAndPassword, user, refreshAuth }}>
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
