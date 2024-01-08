import styled from 'styled-components';
import { theme } from '@styles/theme';
import { Button } from '@components/Button/Button';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: 100vh;
`;

export const Title = styled.h1`
  font-family: ${theme.fonts.family.primary};
  font-size: ${theme.fonts.size.large};
`;

export const Text = styled.p`
  font-family: ${theme.fonts.family.primary};
  font-size: ${theme.fonts.size.small};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  input {
    width: 20rem;
  }
`;

export const SocialButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialButton = styled(Button)`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 4.3rem;
  width: 4.3rem;

  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${theme.colors.white};
  }
`;

export const SocialButtonText = styled.p`
  font-family: ${theme.fonts.family.secondary};
  font-size: ${theme.fonts.size.tiny};
`;

export const SocialButtonImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
