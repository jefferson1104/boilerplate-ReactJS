import styled from 'styled-components';

// ENUMS
import { EButtonSize, EButtonStyle } from '@enums/buttons';

// STYLES
import { theme } from '@styles/theme';

// BUTTON COMPONENT STYLES UTILS
interface IWrapperProps {
  size?: EButtonSize;
  styles?: EButtonStyle;
}

const getButtonHeight = ({ size }: IWrapperProps) => {
  const buttonHeightSizes = {
    [EButtonSize.SMALL]: '2rem',
    [EButtonSize.MEDIUM]: '2.5rem',
    [EButtonSize.LARGE]: '3rem'
  };

  return size && buttonHeightSizes[size];
};

const getButtonBackgroud = ({ styles }: IWrapperProps) => {
  const buttonBackgroundColors = {
    [EButtonStyle.PRIMARY]: theme.colors.primary,
    [EButtonStyle.SECONDARY]: theme.colors.electronBlue,
    [EButtonStyle.OUTLINED]: 'none'
  };

  return styles && buttonBackgroundColors[styles];
};

const getButtonColor = ({ styles }: IWrapperProps) => {
  const buttonColors = {
    [EButtonStyle.PRIMARY]: theme.colors.secondary,
    [EButtonStyle.SECONDARY]: theme.colors.secondary,
    [EButtonStyle.OUTLINED]: theme.colors.primary
  };

  return styles && buttonColors[styles];
};

const getButtonBorder = ({ styles }: IWrapperProps) => {
  const buttonColors = {
    [EButtonStyle.PRIMARY]: 'none',
    [EButtonStyle.SECONDARY]: 'none',
    [EButtonStyle.OUTLINED]: `1px solid ${theme.colors.primary}`
  };

  return styles && buttonColors[styles];
};

// BUTTON COMPONENT STYLES
export const Wrapper = styled.button<IWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  padding: 0.5rem;
  height: ${({ size }) => getButtonHeight({ size })};

  border-radius: 0.5rem;
  border: ${({ styles }) => getButtonBorder({ styles })};

  background-color: ${({ styles }) => getButtonBackgroud({ styles })};
  color: ${({ styles }) => getButtonColor({ styles })};

  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export const Text = styled.p`
  font-size: ${theme.fonts.size.small};
  font-family: ${theme.fonts.family.primary};
  font-weight: ${theme.fonts.weight.normal};
`;
