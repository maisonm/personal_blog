import styled, { keyframes } from 'styled-components';

import { fadeIn, slideInDown } from 'react-animations';

const pageAnimationOnEnter = keyframes`${fadeIn}`;
const pageTitleEnter = keyframes`${slideInDown}`;

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: ${props => props.theme.animationTrans} ${pageAnimationOnEnter};
  padding: 30px;
  padding-top: 60px;
`;

export const PageTitle = styled.div`
  width: 100%;
  color: ${props => props.theme.mainFontColorLight};
  margin-bottom: 30px;
  padding: 30px 4px;
  background-color: ${props => props.theme.headingBaseBgColor};
  background-image: ${props => props.theme.headingBg};
  text-align: center;
  border-radius: ${props => props.theme.borderRad};
  box-shadow: ${props => props.theme.mainBoxShadowNoOff};
  & > h2 {
    color: ${props => props.theme.mainFontColor};
    animation: ${props => props.theme.animationTrans} ${pageTitleEnter};
  }
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
