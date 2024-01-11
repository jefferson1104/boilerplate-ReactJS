import { InputHTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';

// STYLES
import * as Styled from './Input.styles';

// INPUT COMPONENT PROPS
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label?: string;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

// INPUT COMPONENT
export const Input = ({ errorMessage, label, ...props }: IInputProps) => {
  /* Hooks */
  const { colors } = useContext(ThemeContext);

  /* Utils */
  const borderColor = errorMessage ? colors.fluorescentRed : colors.primary;

  /* Renders */
  return (
    <Styled.Wrapper>
      {!!label && <Styled.Label htmlFor={props.name}>{label}</Styled.Label>}
      <Styled.Input borderColor={borderColor} {...(label && { id: props.name })} {...props} />
      {!!errorMessage && <Styled.Error>{errorMessage}</Styled.Error>}
    </Styled.Wrapper>
  );
};
