import { ButtonHTMLAttributes, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

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
  /* Hooks */
  const { colors } = useContext(ThemeContext);

  /* Utils */
  const btnHeightSize = {
    [EButtonSize.SMALL]: '2rem',
    [EButtonSize.MEDIUM]: '2.5rem',
    [EButtonSize.LARGE]: '3rem'
  };

  const btnColor = {
    [EButtonStyle.PRIMARY]: colors.secondary,
    [EButtonStyle.SECONDARY]: colors.secondary,
    [EButtonStyle.OUTLINED]: colors.primary
  };

  const btnBgColor = {
    [EButtonStyle.PRIMARY]: colors.primary,
    [EButtonStyle.SECONDARY]: colors.electronBlue,
    [EButtonStyle.OUTLINED]: 'transparent'
  };

  const btnBorder = {
    [EButtonStyle.PRIMARY]: 'none',
    [EButtonStyle.SECONDARY]: 'none',
    [EButtonStyle.OUTLINED]: `1px solid ${colors.primary}`
  };

  /* Renders */
  return (
    <Styled.Wrapper
      buttonSize={btnHeightSize[size]}
      buttonColor={btnColor[styles]}
      buttonBgColor={btnBgColor[styles]}
      buttonBorder={btnBorder[styles]}
      {...props}
    >
      <Styled.Text>{text}</Styled.Text>
      {children}
    </Styled.Wrapper>
  );
};
