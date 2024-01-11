import styled from 'styled-components';

// INPUT COMPONENT STYLES UTILS
interface IWrapperProps {
  borderColor: string;
}

// INPUT COMPONENT STYLES
export const Wrapper = styled.div``;

export const Label = styled.label`
  font-size: ${(props) => props.theme.fonts.size.small};
`;

export const Input = styled.input<IWrapperProps>`
  font-family: ${(props) => props.theme.fonts.family.primary};
  font-size: ${(props) => props.theme.fonts.size.small};

  color: ${(props) => props.theme.colors.primary};
  background: transparent;

  width: 100%;
  padding: 0.5rem;

  border: 1px solid;

  border-color: ${({ borderColor }) => borderColor};
  border-radius: 0.5rem;

  outline: none;
  transition: border-color 0.4s ease-in-out;

  &:focus-within {
    border-color: ${(props) => props.theme.colors.electronBlue};
  }

  &:disabled {
    border-color: ${(props) => props.theme.colors.breezyGray};
    background-color: ${(props) => props.theme.colors.lightGray};
    cursor: not-allowed;
  }
`;

export const Error = styled.p`
  color: ${(props) => props.theme.colors.fluorescentRed};
  font-size: ${(props) => props.theme.fonts.size.tiny};
`;
