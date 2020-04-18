import styled from 'styled-components';

export const SocialLinkContainer = styled.div`
  position: ${(props) => (props.position ? 'absolute' : null)};
  bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  animation: ${(props) => props.theme[props.animation]} 1.5s ease forwards;
  z-index: 1000;
  & > a {
    margin: 8px;
  }
`;
