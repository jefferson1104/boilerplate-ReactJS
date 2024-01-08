// COMPONENTS
import { Button } from '@components/Button/Button';

// ENUMS
import { EButtonSize, EButtonStyle } from '@enums/buttons';

// IMAGES
import reactLogo from '/assets/images/logo/react.svg';
import viteLogo from '/assets/images/logo/vite.svg';

// STYLES
import * as Styled from './Home.styles';

// HOME PAGE
export const HomePage = () => {
  /* Handlers */
  const goToSourceCodeHandler = () => {
    window.open('https://github.com/jefferson1104/boilerplate-reactjs', '_blank');
  };

  /* Renders */
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Image src={viteLogo} className="logo" alt="Vite logo" />
        <Styled.Image src={reactLogo} className="logo react" alt="React logo" />
      </Styled.Header>

      <Styled.Content>
        <Styled.Title>Boilerplate Vite + ReactJS</Styled.Title>

        <Styled.Paragraph>
          Vite • ReactJS • TypeScript • Jest • Styled-Components • ESLint • Prettier • Husky
        </Styled.Paragraph>
      </Styled.Content>

      <Styled.Footer>
        <Styled.ButtonWrapper>
          <Button
            onClick={goToSourceCodeHandler}
            size={EButtonSize.SMALL}
            styles={EButtonStyle.PRIMARY}
            text="Source Code"
          />
        </Styled.ButtonWrapper>

        <Styled.Link href="https://www.linkedin.com/in/jeffersonsjunior/" target="_blank" rel="noreferrer">
          @2022 By Jefferson Soares
        </Styled.Link>
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
