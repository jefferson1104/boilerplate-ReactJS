import Switch from 'react-switch';

// CONTEXTS
import { useThemeContextHook } from '@contexts/theme.context';

// STYLES
import * as Styled from './Header.styles';

// HEADER COMPONENT
export const Header = () => {
  /* Hooks */
  const { toggleThemeHandler, theme } = useThemeContextHook();

  /* Renders */
  return (
    <Styled.Wrapper>
      <Styled.Title>Boilerplate</Styled.Title>

      <Switch
        onChange={toggleThemeHandler}
        checked={theme?.title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={theme?.colors.electronBlue}
        offColor={theme?.colors.lightGray}
      />
    </Styled.Wrapper>
  );
};
