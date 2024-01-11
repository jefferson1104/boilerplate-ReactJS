import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { Button } from '@components/Button/Button';

// ENUMS
import { EButtonSize, EButtonStyle } from '@enums/buttons';

// STYLES
import * as Styled from './Home.styles';

// HOME PAGE
export const HomePage = () => {
  /* Hooks */
  const navigate = useNavigate();

  /* Handlers */
  const goToProfileHandler = () => {
    navigate('/profile');
  };

  const goToSourceCodeHandler = () => {
    window.open('https://github.com/jefferson1104/boilerplate-reactjs', '_blank');
  };

  /* Renders */
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Image src="/assets/images/logo/vite.svg" className="logo" alt="Vite logo" />
        <Styled.Image src="/assets/images/logo/react.svg" className="logo react" alt="React logo" />
      </Styled.Header>

      <Styled.Content>
        <Styled.Title>Boilerplate Vite + ReactJS</Styled.Title>

        <Styled.Paragraph>Vite • ReactJS • TypeScript • Jest • Styled-Components • ESLint • Prettier</Styled.Paragraph>
      </Styled.Content>

      <Styled.Footer>
        <Styled.ButtonWrapper>
          <Button onClick={goToProfileHandler} size={EButtonSize.SMALL} styles={EButtonStyle.OUTLINED} text="Profile" />

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
