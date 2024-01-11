import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';

// CONTEXTS
import { useAuthContextHook } from '@contexts/auth.context';

// ENUMS
import { EAuthProvider } from '@enums/auth';
import { EButtonStyle } from '@enums/buttons';

// HOOKS
import { useIsAuthenticated } from '@hooks/useIsAuthenticated';

// UTILS
import { IFieldError, ISignInFormValues, signInValidation } from '@utils/formsValidations';

// STYLES
import * as Styled from './Auth.styles';

// AUTH PAGE
export const AuthPage = () => {
  /* States */
  const [fieldError, setFieldError] = useState<IFieldError>({});
  const [formValues, setFormValues] = useState<ISignInFormValues>({
    email: '',
    password: ''
  });

  /* Hooks */
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  const { signInWithGoogle, signInWithEmailAndPassword } = useAuthContextHook();

  /* Handlers */
  const inputChangeHandler = (field: string, value: string) => {
    setFormValues((values) => ({ ...values, [field]: value }));
  };

  const signInWithEmailAndPasswordHandler = async (e: FormEvent) => {
    e.preventDefault();

    const errors = signInValidation(formValues);
    if (Object.keys(errors).length) {
      setFieldError(errors);
      return;
    }

    setFieldError({});

    await signInWithEmailAndPassword(formValues.email, formValues.password);
  };

  const signInWithOAuthHandler = async (provider: EAuthProvider) => {
    if (provider === EAuthProvider.GOOGLE) {
      await signInWithGoogle();
      return;
    }
  };

  /* Lifecyles */
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  /* Renders */
  return (
    <Styled.Wrapper>
      <Styled.Form>
        <Styled.Title>Login</Styled.Title>

        <Input
          placeholder="E-Mail"
          type="email"
          name="email"
          value={formValues.email}
          errorMessage={fieldError?.email}
          onChange={(e) => inputChangeHandler('email', e.target.value)}
        />

        <Input
          placeholder="Password"
          type="password"
          name="password"
          value={formValues.password}
          errorMessage={fieldError?.password}
          onChange={(e) => inputChangeHandler('password', e.target.value)}
        />

        <Button type="button" text="Sign in" onClick={signInWithEmailAndPasswordHandler} />

        <Styled.Text>Or sign in with</Styled.Text>

        <Styled.SocialButtonsWrapper>
          <Styled.SocialButton
            type="button"
            styles={EButtonStyle.OUTLINED}
            onClick={() => signInWithOAuthHandler(EAuthProvider.GOOGLE)}
          >
            <Styled.SocialButtonImg src="/assets/images/auth/google.png" alt="Google" />
            <Styled.SocialButtonText>Google</Styled.SocialButtonText>
          </Styled.SocialButton>

          <Styled.SocialButton
            type="button"
            styles={EButtonStyle.OUTLINED}
            onClick={() => signInWithOAuthHandler(EAuthProvider.LINKEDIN)}
          >
            <Styled.SocialButtonImg src="/assets/images/auth/linkedin.png" alt="Linkedin" />
            <Styled.SocialButtonText>linkedin</Styled.SocialButtonText>
          </Styled.SocialButton>

          <Styled.SocialButton
            type="button"
            styles={EButtonStyle.OUTLINED}
            onClick={() => signInWithOAuthHandler(EAuthProvider.GITHUB)}
          >
            <Styled.SocialButtonImg src="/assets/images/auth/github.png" alt="Github" />
            <Styled.SocialButtonText>Github</Styled.SocialButtonText>
          </Styled.SocialButton>

          <Styled.SocialButton
            type="button"
            styles={EButtonStyle.OUTLINED}
            onClick={() => signInWithOAuthHandler(EAuthProvider.FACEBOOK)}
          >
            <Styled.SocialButtonImg src="/assets/images/auth/facebook.png" alt="Facebook" />
            <Styled.SocialButtonText>Facebook</Styled.SocialButtonText>
          </Styled.SocialButton>
        </Styled.SocialButtonsWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};
