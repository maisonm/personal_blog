import styled, { keyframes } from 'styled-components';
import { bounceInLeft, bounceInRight, fadeIn } from 'react-animations';

const slideLeft = keyframes(bounceInLeft);
const slideRight = keyframes(bounceInRight);
const fade = keyframes(fadeIn);

export const HomePageHero = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0;
  background: ${props => props.theme.heroBg};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: -60px;
  z-index: -10;
`;

export const HomePageIntro = styled.div`
  width: 55%;
`;

export const HomePageIntroBlurb = styled.div`
  width: 100%;
  border-top: ${props =>
    props.offset ? `1px solid ${props.theme.altBorderColor}` : null};
  border-bottom: ${props =>
    props.offset ? `1px solid ${props.theme.altBorderColor}` : null};
  text-align: ${props => (props.offset ? 'right' : 'left')};
  padding: ${props => (props.offset ? '14px 0px 14px 0px' : null)};
  margin-bottom: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  font-size: 0.95em;
  animation: 1.6s ease-in ${props => (props.offset ? slideLeft : slideRight)};
  animation-fill-mode: forwards;
`;
