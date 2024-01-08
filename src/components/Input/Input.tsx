import { InputHTMLAttributes } from 'react';

// STYLES
import * as Styled from './Input.styles';

// INPUT COMPONENT PROPS
interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string;
  label?: string;
}

// INPUT COMPONENT
export const Input = ({ errorMessage, label, ...props }: IInputProps) => {
  /* Renders */
  return (
    <Styled.Wrapper>
      {!!label && <Styled.Label htmlFor={props.name}>{label}</Styled.Label>}
      <Styled.Input error={!!errorMessage} {...(label && { id: props.name })} {...props} />
      {!!errorMessage && <Styled.Error>{errorMessage}</Styled.Error>}
    </Styled.Wrapper>
  );
};
