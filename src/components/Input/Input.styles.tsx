import styled from 'styled-components';

// STYLES
import { theme } from '@styles/theme';

// INPUT COMPONENT STYLES UTILS
interface IWrapperProps {
  disabled?: boolean;
  error?: boolean;
}

const getErrorColor = ({ error }: IWrapperProps) => {
  if (error) {
    return theme.colors.fluorescentRed;
  }

  return theme.colors.primary;
};

// INPUT COMPONENT STYLES
export const Wrapper = styled.div``;

export const Label = styled.label`
  font-size: ${theme.fonts.size.small};
`;

export const Input = styled.input<IWrapperProps>`
  font-family: ${theme.fonts.family.primary};
  font-size: ${theme.fonts.size.small};

  color: ${theme.colors.primary};
  background: transparent;

  width: 100%;
  padding: 0.5rem;

  border: 1px solid;
  border-color: ${({ error }) => getErrorColor({ error })};
  border-radius: 0.5rem;

  outline: none;
  transition: border-color 0.4s ease-in-out;

  &:focus-within {
    border-color: ${theme.colors.electronBlue};
  }

  &:disabled {
    border-color: ${theme.colors.breezyGray};
    background-color: ${theme.colors.lightGray};
    cursor: not-allowed;
  }
`;

export const Error = styled.p`
  color: ${theme.colors.fluorescentRed};
  font-size: ${theme.fonts.size.tiny};
`;
