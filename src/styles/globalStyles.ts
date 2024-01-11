import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    list-style: none;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
  }

  body {
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.family.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
