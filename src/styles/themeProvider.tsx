import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyles } from '@styles/globalStyles';
import { theme } from '@styles/theme';

interface IThemeProviderProps {
  children: React.ReactNode;
  theme?: DefaultTheme;
}

export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children, theme: customTheme }) => {
  return (
    <StyledThemeProvider theme={customTheme || theme}>
      {children}
      <GlobalStyles />
    </StyledThemeProvider>
  );
};
