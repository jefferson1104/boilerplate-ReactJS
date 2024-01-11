import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

// CONTEXTS
import { useThemeContextHook } from '@contexts/theme.context';

// STYLES
import { GlobalStyles } from '@styles/globalStyles';

// THEME PROVIDER UTILS
interface IThemeProviderProps {
  children: React.ReactNode;
  theme: DefaultTheme;
}

// THEME PROVIDER
export const ThemeProvider: React.FC<IThemeProviderProps> = ({ children, theme: customTheme }) => {
  const { theme } = useThemeContextHook();

  /* Renders */
  return (
    <StyledThemeProvider theme={customTheme || theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};
