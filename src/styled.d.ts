import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      electronBlue: string;
      fluorescentRed: string;
      greenEmerald: string;
      lightGray: string;
      breezyGray: string;
      white: string;
    };
    fonts: {
      family: {
        primary: string;
        secondary: string;
      };
      size: {
        tiny: string;
        small: string;
        medium: string;
        large: string;
        huge: string;
      };
      weight: {
        thin: number;
        light: number;
        normal: number;
        medium: number;
        bold: number;
      };
    };
  }
}
