import { ReactNode, createContext, useContext, useState } from 'react';
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components';

// STYLES
import light from '@styles/themes/light';
import dark from '@styles/themes/dark';

// THEME CONTEXT UTILS
interface IThemeProviderProps {
  children: ReactNode;
}

interface IThemeContext {
  theme?: DefaultTheme;
  toggleThemeHandler: () => void;
}

// THEME CONTEXT
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

// THEME PROVIDER
const ThemeProvider = ({ children }: IThemeProviderProps) => {
  /* States */
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : light;
  });

  /* Handlers */
  const toggleThemeHandler = () => {
    if (theme.title === 'light') {
      setTheme(dark);
      localStorage.setItem('theme', JSON.stringify(dark));
    }

    if (theme.title === 'dark') {
      setTheme(light);
      localStorage.setItem('theme', JSON.stringify(light));
    }
  };

  /* Render */
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleThemeHandler
      }}
    >
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// USE AUTH CONTEXT HOOK
const useThemeContextHook = () => {
  const context = useContext(ThemeContext);
  return context;
};

export { useThemeContextHook, ThemeProvider };
