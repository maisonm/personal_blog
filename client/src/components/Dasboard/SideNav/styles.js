import styled, { keyframes } from 'styled-components';
import { slideInLeft, fadeIn } from 'react-animations';

const slideAnimationForArrow = keyframes(slideInLeft);
const fadeInArrow = keyframes(fadeIn);

export const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const Navlink = styled.div`
  width: 100%;
  margin-bottom: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: ${props => props.theme.hoverTrans};
  justify-content: space-between;

  & > p {
    margin-left: 6px;
    font-size: 0.85em;
    font-weight: 500;
    width: 130px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.mainFontColorDark};
  }
`;

export const IconContainer = styled.div`
  width: 20px;
  & > div {
    animation: 0.2s ease ${fadeInArrow};
    animation: 0.3s ${props => props.theme.mainBezier} ${slideAnimationForArrow};
  }
`;
