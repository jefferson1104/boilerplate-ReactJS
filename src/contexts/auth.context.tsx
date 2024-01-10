import { ReactNode, createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// INTERFACES
import { IFirebaseAutheticatedUser } from '@interfaces/auth';

// SERVICES
import { AuthService } from '@services/auth';

// AUTH CONTEXT UTILS
interface IAuthProviderProps {
  children: ReactNode;
}

interface IAuthContext {
  isAuthLoading: boolean;
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

  /* Render */
  return (
    <AuthContext.Provider value={{ isAuthLoading, signInWithGoogle, signInWithEmailAndPassword, user }}>
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
