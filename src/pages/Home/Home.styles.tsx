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
  margin-bottom: 2rem;

  ${media.lessThan('medium')`
    margin-bottom: 1rem;
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  margin-top: 2.5rem;

  ${media.lessThan('medium')`
    margin-top: 1rem;
  `}
`;

export const Footer = styled.footer`
  margin-top: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Image = styled.img`
  height: 10rem;
  will-change: filter;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: brightness(0.6);
  }

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

export const ButtonWrapper = styled.div`
  width: 20rem;

  ${media.lessThan('medium')`
    font-size: ${theme.fonts.size.tiny};
  `}
`;

export const Link = styled.a`
  font-family: ${theme.fonts.family.secondary};
  font-size: ${theme.fonts.size.small};
  font-weight: ${theme.fonts.weight.light};
  color: ${theme.colors.primary};

  transition: all 0.5s ease-in-out;

  &:hover {
    letter-spacing: 0.5px;
    filter: brightness(2.5);
  }

  ${media.lessThan('medium')`
  font-size: ${theme.fonts.size.small};
  `}
`;
