import styled, { keyframes } from 'styled-components';

const hoverEffect = keyframes`
      0%, 100% {
    top: 49%;
  }
  50% {
    top: 51%;
  }
`;

export const Page404Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.bgDark};
  /* animation: 0.5s ${(props) => props.theme.bounceInRight} ease; */
`;

export const PageImage404 = styled.img`
  width: 240px;
  animation: ${hoverEffect} 1s ease-in-out infinite;
  transition-timing-function: ${(props) => props.theme.mainBezier};

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
`;

export const Page404Message = styled.div`
  width: 75%;
  text-align: center;
  margin-top: 280px;
  color: ${(props) => props.theme.whiteFontColor};

  & > p a {
    color: ${(props) => props.theme.secondaryFontColor};
    transition: ${(props) => props.theme.hoverTrans};

    &:hover {
      transition: ${(props) => props.theme.hoverTrans};
      color: ${(props) => props.theme.mainFontColorMedium};
    }
  }
`;

export const PageImageContainer = styled.div`
  width: 100%;
  height: 250px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;
