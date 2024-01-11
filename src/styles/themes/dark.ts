import { sharedContent } from './shared';

// ENUMS
import { ETheme } from '@enums/theme';

// THEME
export default {
  title: ETheme.DARK,
  colors: {
    primary: '#f1f2f6',
    secondary: '#1e272e',
    electronBlue: '#0984e3',
    fluorescentRed: '#ff5252',
    greenEmerald: '#2ecc71',
    lightGray: '#dfe6e9',
    breezyGray: '#b2bec3',
    white: '#ffffff'
  },
  ...sharedContent
};
