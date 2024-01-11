import styled from 'styled-components';

// BUTTON COMPONENT STYLES UTILS
interface IWrapperProps {
  buttonSize?: string;
  buttonColor?: string;
  buttonBgColor?: string;
  buttonBorder?: string;
}

// BUTTON COMPONENT STYLES
export const Wrapper = styled.button<IWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  padding: 0.5rem;

  height: ${({ buttonSize }) => buttonSize};

  border-radius: 0.5rem;
  border: ${({ buttonBorder }) => buttonBorder};

  background-color: ${({ buttonBgColor }) => buttonBgColor};
  color: ${({ buttonColor }) => buttonColor};

  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const Text = styled.p`
  font-size: ${(props) => props.theme.fonts.size.small};
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-weight: ${(props) => props.theme.fonts.weight.normal};
`;
