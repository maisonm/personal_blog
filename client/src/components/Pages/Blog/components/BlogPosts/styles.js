import styled, { keyframes } from 'styled-components';
import { slideInDown, fadeIn } from 'react-animations';

const slideIn = keyframes(slideInDown);
const fadeInAni = keyframes(fadeIn);

export const BlogPostListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BlogListCard = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 0px;
  border-bottom: solid 1px ${(props) => props.theme.mainBorderColor};
  margin-bottom: 4px;
  height: 140px;
  cursor: pointer;
  transition: ${(props) => props.theme.animationTrans};
  animation: 0.3s ease ${fadeInAni};

  &:hover {
    transition: ${(props) => props.theme.animationTrans};
    border-bottom: solid 1px ${(props) => props.theme.altBorderColor};
  }
`;

export const BlogPostHeader = styled.h3`
  margin-bottom: 10px;
  letter-spacing: 0.3px;
`;

export const BlogPostDescription = styled.div`
  overflow: none;
  color: ${(props) => props.theme.mainFontColorMedium};
  width: 60%;
  font-weight: 500;
  letter-spacing: -0.5px;
  line-height: 1.2;
`;

export const BlogPostInfo = styled.div`
  max-width: 75%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;
`;

export const BlogPostInfoBox = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  margin-right: 14px;
  max-width: 100%;

  & > div {
    display: flex;
  }

  & > div span {
    margin-right: 4px;
    color: ${(props) => props.theme.mainFontColorDark};
  }

  & > div span:nth-child(3) {
    color: ${(props) => props.theme.secondaryFontColor};
  }
`;

export const AreYouSureRemove = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  font-weight: 500;
  transition: ${(props) => props.theme.hoverTrans};
  animation: 0.3s ease ${slideIn};

  & > p {
    margin-right: 12px;
    color: ${(props) => props.theme.fontWarningColor};
  }

  & > button {
    outline: none;
    margin-right: 8px;
    border: 2px solid ${(props) => props.theme.mainBorderColor};
    padding: 2px 4px;
    border-radius: ${(props) => props.theme.borderRad};
    cursor: pointer;
    transition: ${(props) => props.theme.hoverTrans};

    &:hover {
      transition: ${(props) => props.theme.hoverTrans};
      box-shadow: ${(props) => props.theme.mainBoxShadowNoOff};
    }
  }
`;
