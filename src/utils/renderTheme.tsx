import { ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';

import { theme } from '@styles/theme';
import { ThemeProvider } from '@styles/themeProvider';

export const renderTheme = (children: ReactNode, options?: RenderOptions) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options);
};
