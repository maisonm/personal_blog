import styled, { keyframes } from 'styled-components';
import { bounceInLeft, bounceInRight, fadeIn } from 'react-animations';

const slideLeft = keyframes(bounceInLeft);
const slideRight = keyframes(bounceInRight);
const fade = keyframes(fadeIn);

export const HomePageHero = styled.div`
  min-height: 100vh;
  position: relative;
  width: 100%;
  margin: 0;
  background: ${(props) => props.theme.heroBg};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -60px;
`;

// export const HomePageIntro = styled.div`
//   width: 55%;
// `;

// export const HomePageIntroBlurb = styled.div`
//   width: 100%;
//   border-top: ${(props) =>
//     props.offset ? `1px solid ${props.theme.altBorderColor}` : null};
//   border-bottom: ${(props) =>
//     props.offset ? `1px solid ${props.theme.altBorderColor}` : null};
//   text-align: ${(props) => (props.offset ? 'right' : 'left')};
//   padding: ${(props) => (props.offset ? '14px 0px 14px 0px' : null)};
//   margin-bottom: 14px;
//   font-weight: 500;
//   letter-spacing: 0.3px;
//   font-size: 0.95em;
//   animation: 1.6s ease-in ${(props) => (props.offset ? slideLeft : slideRight)};
//   animation-fill-mode: forwards;
// `;

export const LatestPostsHeader = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 60px;
`;

export const HeroHeader = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  padding: 8px;

  & > p {
    font-size: 2.2em;
    font-weight: 400;
  }

  & > p:nth-child(1) {
    font-weight: 600;
  }
  & > div {
    margin-left: 8px;
    margin-right: 8px;
    border: 1.5px solid ${(props) => props.theme.borderSecondaryColor};
  }
`;

export const HeroText = styled.div`
  width: 40%;
  padding: 8px;
  text-align: center;

  & > p {
    line-height: 1.5;
    font-weight: 500;
    color: ${(props) => props.theme.mainFontColorMediumDark};
  }
`;

export const HeroViewPosts = styled.div`
  width: 75%;
  text-align: center;
  margin-top: 15px;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.secondaryFontColor};
    font-weight: 600;
    font-size: 0.95em;
    transition: ${(props) => props.theme.hoverTrans};

    &:hover {
      transition: ${(props) => props.theme.hoverTrans};
      color: ${(props) => props.theme.mainFontColorMedium};
    }
  }
`;
