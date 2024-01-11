import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  height: 4rem;
  width: 100%;

  background-color: ${(props) => props.theme.colors.breezyGray};
  color: ${(props) => props.theme.colors.secondary};

  ${media.lessThan('medium')`
    padding: 0 1rem;
  `}
`;

export const Title = styled.p`
  font-size: ${(props) => props.theme.fonts.size.large};
  font-family: ${(props) => props.theme.fonts.family.secondary};
  font-weight: ${(props) => props.theme.fonts.weight.thin};
`;

export const ButtonWrapper = styled.div`
  width: 10rem;
`;
