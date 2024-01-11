import { sharedContent } from './shared';

// ENUMS
import { ETheme } from '@enums/theme';

// THEME
export default {
  title: ETheme.LIGHT,
  colors: {
    primary: '#1e272e',
    secondary: '#f1f2f6',
    electronBlue: '#0984e3',
    fluorescentRed: '#ff5252',
    greenEmerald: '#2ecc71',
    lightGray: '#dfe6e9',
    breezyGray: '#b2bec3',
    white: '#ffffff'
  },
  ...sharedContent
};
