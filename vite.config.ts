import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), EnvironmentPlugin('all')],
  resolve: {
    alias: {
      '@enums': '/src/enums',
      '@components': '/src/components',
      '@contexts': '/src/contexts',
      '@hooks': '/src/hooks',
      '@interfaces': '/src/interfaces',
      '@pages': '/src/pages',
      '@routes': '/src/routes',
      '@services': '/src/services',
      '@styles': '/src/styles',
      '@utils': '/src/utils'
    }
  }
});
