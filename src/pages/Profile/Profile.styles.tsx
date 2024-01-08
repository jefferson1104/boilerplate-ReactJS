import styled from 'styled-components';
import media from 'styled-media-query';

import { theme } from '@styles/theme';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Header = styled.header`
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const Image = styled.img`
  height: 8rem;

  border-radius: 50%;
  border: 2px solid ${theme.colors.electronBlue};

  will-change: filter;
  transition: all 0.5s ease-in-out;

  ${media.lessThan('medium')`
    height: 6rem;
  `}
`;

export const Title = styled.h1`
  font-size: ${theme.fonts.size.huge};
  font-weight: ${theme.fonts.weight.bold};

  ${media.lessThan('medium')`
    font-size: ${theme.fonts.size.medium};
  `}
`;

export const Paragraph = styled.p`
  font-size: ${theme.fonts.size.medium};

  ${media.lessThan('medium')`
    font-size: ${theme.fonts.size.small};
  `}
`;
