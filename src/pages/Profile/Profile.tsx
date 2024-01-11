import { useNavigate } from 'react-router-dom';

// COMPONENTS
import { Button } from '@components/Button/Button';

// CONTEXTS
import { useAuthContextHook } from '@contexts/auth.context';

// ENUMS
import { EButtonSize, EButtonStyle } from '@enums/buttons';

// STYLES
import * as Styled from './Profile.styles';

// PROFILE PAGE
export const ProfilePage = () => {
  /* Hooks */
  const navigate = useNavigate();
  const { user } = useAuthContextHook();

  /* Vars */
  const avatar = user?.picture ? user.picture : '/assets/images/auth/default-avatar.png';

  /* Handlers */
  const goToHomeHandler = () => {
    navigate('/');
  };

  /* Renders */
  return (
    <Styled.Wrapper>
      <Styled.Header>
        <Styled.Image src={avatar} className="logo" alt={'user avatar'} />
      </Styled.Header>

      <Styled.Content>
        <Styled.Title>{user?.name}</Styled.Title>
        <Styled.Paragraph>{user?.email}</Styled.Paragraph>
      </Styled.Content>

      <Styled.Footer>
        <Button onClick={goToHomeHandler} size={EButtonSize.SMALL} styles={EButtonStyle.SECONDARY} text="Go Home" />
      </Styled.Footer>
    </Styled.Wrapper>
  );
};
