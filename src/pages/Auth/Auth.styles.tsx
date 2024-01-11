import styled from 'styled-components';

// COMPONENTS
import { Button } from '@components/Button/Button';

// AUTH PAGE STYLES
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  height: calc(100vh - 4rem);
`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-size: ${(props) => props.theme.fonts.size.large};
`;

export const Text = styled.p`
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-size: ${(props) => props.theme.fonts.size.small};
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

  background-color: ${(props) => props.theme.colors.primary};
  transition: all 0.5s ease-in-out;
`;

export const SocialButtonText = styled.p`
  font-family: ${(props) => props.theme.fonts.family.secondary};
  font-size: ${(props) => props.theme.fonts.size.tiny};
  color: ${(props) => props.theme.colors.secondary};
`;

export const SocialButtonImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;
