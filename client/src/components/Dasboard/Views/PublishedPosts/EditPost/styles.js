import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const fadeInView = keyframes(fadeIn);

export const EditPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2px;
  animation: 0.4s ${fadeInView} ease;
`;

export const EditPostInfoLabel = styled.label`
  margin-bottom: 6px;
  font-weight: 600;
  color: ${props => props.theme.mainFontColor};
  letter-spacing: 0.3px;
  font-size: ${props => props.theme.labelFontSize};
  margin-right: 8px;
`;

export const EditPostInfoInput = styled.input`
  background: ${props => props.theme.bgAlt};
  padding: 10px 10px;
  border-radius: ${props => props.theme.inputBorderRad};
  border: ${props =>
    props.active ? props.theme.inputBorderActive : props.theme.inputBorder};
  width: ${props => props.inputwidth};
  font-size: ${props => props.theme.inputFontSizeMd};
  font-weight: 500;
  height: ${props => (props.height ? props.height : null)};
  outline: none;
  margin-bottom: 16px;

  &::placeholder {
    color: ${props => props.theme.placeholderFontColor};
    font-size: ${props => props.theme.placeholderFontSize};
  }
`;

export const EditPostTextArea = styled.textarea`
  background: ${props => props.theme.bgAlt};
  padding: 10px 10px;
  border-radius: ${props => props.theme.inputBorderRad};
  border: ${props =>
    props.active ? props.theme.inputBorderActive : props.theme.inputBorder};
  width: ${props => props.inputwidth};
  margin-bottom: 20px;
  font-size: 1em;
  font-weight: 500;
  height: ${props => (props.height ? props.height : null)};
  outline: none;
  overflow: auto;
`;

export const PostOptionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostOptionGroup = styled.div`
  width: ${props => props.width};
  margin: 8px;
`;

export const EditPostBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  outline: none;
  box-shadow: ${props => props.theme.boxShadowNoOff};
  margin-top: 20px;
  border: 2px solid ${props => props.theme.mainBtnBg};
  border-radius: ${props => props.theme.borderRad};
  background: ${props => props.theme.mainBtnBg};
  cursor: pointer;
  color: ${props => props.theme.btnMainFontColor};
  font-weight: ${props => props.theme.btnFontWeight};
  font-size: ${props => props.theme.btnFontSizeMd};
  transition: ${props => props.theme.hoverTrans};

  &:hover {
    border: 2px solid ${props => props.theme.btnBorderHover};
  }
`;

export const EditAnotherPost = styled(EditPostBtn)`
  margin-top: 20px;
  border: none;
  background: ${props => props.theme.btnSuccessBg};
  color: ${props => props.theme.btnFontColorWhite};
  animation: 0.4s ${fadeInView} ease;

  &:hover {
    border: none;
  }
`;

export const CloseEditPost = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.secondaryFontColor};
  margin-bottom: 20px;

  & > h3 {
    color: ${props => props.theme.mainFontColor};
  }
`;
