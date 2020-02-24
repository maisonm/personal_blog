import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const pageAnimationOnEnter = keyframes`${fadeIn}`;

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: ${props => props.theme.animationTrans} ${pageAnimationOnEnter};
  padding: 40px;
`;

export const PageTitle = styled.div`
  width: 100%;
  color: ${props => props.theme.mainFontColorLight};
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  border: solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
