import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations';

const fadeInView = keyframes(fadeIn);

export const AddPostContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2px;
  animation: 0.4s ${fadeInView} ease;
`;

export const AddPostInfoLabel = styled.label`
  margin-bottom: 6px;
  font-weight: 600;
  color: ${props => props.theme.mainFontColor};
  letter-spacing: 0.3px;
  font-size: ${props => props.theme.labelFontSize};
  margin-right: 8px;
`;

export const AddPostInfoInput = styled.input`
  background: ${props => props.theme.bgAlt};
  padding: 10px 10px;
  border-radius: ${props => props.theme.inputBorderRad};
  border: ${props =>
    props.active ? props.theme.inputBorderActive : props.theme.inputBorder};
  width: ${props => props.inputwidth};
  font-size: 1em;
  font-weight: 500;
  height: ${props => (props.height ? props.height : null)};
  outline: none;

  &::placeholder {
    color: ${props => props.theme.placeholderFontColor};
    font-size: ${props => props.theme.placeholderFontSize};
  }
`;

export const AddPostTextArea = styled.textarea`
  background: ${props => props.theme.bgAlt};
  padding: 10px 10px;
  border-radius: ${props => props.theme.inputBorderRad};
  border: ${props =>
    props.active ? props.theme.inputBorderActive : props.theme.inputBorder};
  width: ${props => props.inputwidth};
  margin-bottom: 20px;
  margin-top: 20px;
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
