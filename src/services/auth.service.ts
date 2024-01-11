import { GoogleAuthProvider, UserCredential, signInWithPopup } from 'firebase/auth';

// UTILS
import { firebaseAuth } from '@utils/firebase';

// AUTH SERVICE
export const AuthService = {
  signInWithEmailAndPassword: async (email: string, password: string): Promise<void> => {
    const payloadMock = {
      email,
      password
    };

    console.log('SERVICE SIGN IN WITH EMAIL AND PASSWORD', payloadMock);

    // Lógica de autenticação com email/senha
    // Retorne o token de autenticação ou lide com erros
  },

  signInWithGoogle: async (): Promise<UserCredential> => {
    const googleFirebaseProvider = new GoogleAuthProvider();

    const responseGoogleAuth = await signInWithPopup(firebaseAuth, googleFirebaseProvider);

    return responseGoogleAuth;
  }
};
