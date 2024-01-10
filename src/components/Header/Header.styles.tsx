import styled from 'styled-components';
import media from 'styled-media-query';

import { theme } from '@styles/theme';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  height: 4rem;
  width: 100%;

  background-color: ${theme.colors.breezyGray};
  color: ${theme.colors.secondary};

  ${media.lessThan('medium')`
    padding: 0 1rem;
  `}
`;

export const Title = styled.p`
  font-size: ${theme.fonts.size.large};
  font-family: ${theme.fonts.family.secondary};
  font-weight: ${theme.fonts.weight.thin};
`;

export const ButtonWrapper = styled.div`
  width: 10rem;
`;
