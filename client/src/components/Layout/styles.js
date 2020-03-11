import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const pageAnimationOnEnter = keyframes`${fadeIn}`;

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
  margin-left: 4px;

  & > h2 {
    color: ${props => props.theme.mainFontColor};
  }
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  padding: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
