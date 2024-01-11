import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { Button } from '@components/Button/Button';
import { Input } from '@components/Input/Input';

// CONTEXTS
import { useAuthContextHook } from '@contexts/auth.context';
import { useThemeContextHook } from '@contexts/theme.context';

// ENUMS
import { EAuthProvider } from '@enums/auth';
import { EButtonStyle } from '@enums/buttons';
import { ETheme } from '@enums/theme';

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
  const { theme } = useThemeContextHook();
  const { signInWithGoogle, signInWithEmailAndPassword } = useAuthContextHook();

  /* Vars */
  const googleLogo = '/assets/images/auth/google.svg';
  const linkedinLogo = '/assets/images/auth/linkedin.svg';
  const facebookLogo = '/assets/images/auth/facebook.svg';
  const githubLogo =
    theme?.title === ETheme.LIGHT ? '/assets/images/auth/github-light.svg' : '/assets/images/auth/github.svg';

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

  /* Utils */
  const authSocialOptions = [
    {
      provider: 'Google',
      logo: '/assets/images/auth/google.svg',
      handler: () => signInWithOAuthHandler(EAuthProvider.GOOGLE)
    },
    {
      provider: 'Linkedin',
      logo: '/assets/images/auth/linkedin.svg',
      handler: () => console.log(EAuthProvider.LINKEDIN)
    },
    {
      provider: 'Github',
      logo: theme?.title === ETheme.LIGHT ? '/assets/images/auth/github-light.svg' : '/assets/images/auth/github.svg',
      handler: () => console.log(EAuthProvider.GITHUB)
    },
    {
      provider: 'Facebook',
      logo: '/assets/images/auth/facebook.svg',
      handler: () => console.log(EAuthProvider.FACEBOOK)
    }
  ];

  const renderAuthSocialButtons = authSocialOptions.map((option) => (
    <Styled.SocialButton key={option.provider} type="button" styles={EButtonStyle.OUTLINED} onClick={option.handler}>
      <Styled.SocialButtonImg src={option.logo} alt={option.provider} />
      <Styled.SocialButtonText>{option.provider}</Styled.SocialButtonText>
    </Styled.SocialButton>
  ));

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

        <Styled.SocialButtonsWrapper>{renderAuthSocialButtons}</Styled.SocialButtonsWrapper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};
