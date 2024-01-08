import { ButtonHTMLAttributes, ReactNode } from 'react';

// ENUMS
import { EButtonSize, EButtonStyle } from '@enums/buttons';

// STYLES
import * as Styled from './Button.styles';

// BUTTON COMPONENT UTILS
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClickHandler?: () => void;
  size?: EButtonSize;
  styles?: EButtonStyle;
  text?: string;
  children?: ReactNode;
}

// BUTTON COMPONENT
export const Button = ({
  size = EButtonSize.MEDIUM,
  styles = EButtonStyle.PRIMARY,
  text,
  children,
  ...props
}: IButtonProps) => {
  /* Renders */
  return (
    <Styled.Wrapper size={size} styles={styles} {...props}>
      <Styled.Text>{text}</Styled.Text>
      {children}
    </Styled.Wrapper>
  );
};
