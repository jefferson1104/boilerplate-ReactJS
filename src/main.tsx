import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// CONTEXTS
import { ThemeProvider } from '@contexts/theme.context';

// STYLES
import { GlobalStyles } from '@styles/globalStyles';

// MAIN
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
