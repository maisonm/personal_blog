import styled from 'styled-components';

export const SocialLinkContainer = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${(props) => props.theme.bounceInUp} 1.5s ease forwards;
  z-index: 1000;
  & > a {
    margin: 8px;
  }
`;
