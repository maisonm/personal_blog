import styled, { keyframes } from 'styled-components';
import { fadeIn, bounceIn } from 'react-animations';

const fadeInAni = keyframes(fadeIn);
const bounceInAni = keyframes(bounceIn);

export const TagBlurbContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

export const Blurb = styled.div`
  padding: 8px 12px;
  border: solid 1px ${props => props.theme.mainBorderColor};
  background: ${props => props.theme.mainBgWhite};
  border-radius: ${props => props.theme.borderRad};
  box-shadow: ${props => props.theme.mainBoxShadowNoOff};
  margin: 4px;
  color: ${props => props.theme.mainFontColor};
  font-weight: 500;
  cursor: pointer;
  transition: ${props => props.theme.hoverTrans};
  animation: ${bounceInAni} 0.3s ease;

  &:hover {
    transition: ${props => props.theme.hoverTrans};
    border: solid 1px ${props => props.theme.warningBorderColor};
  }
`;

export const SaveTagsBtn = styled.button`
  padding: 8px 18px;
  outline: none;
  /* border: 1.5px solid ${props => props.theme.mainBorderColor}; */
  border: none;
  border-radius: ${props => props.theme.borderRad};
  cursor: pointer;
  transition: ${props => props.theme.hoverTrans};
  background: ${props => props.theme.successBg};
  color: ${props => props.theme.whiteFontColor};
  animation: ${fadeInAni} .3s ease;

  &:hover {
    /* border: 1.5px solid ${props => props.theme.successBorderColor}; */
    transition: ${props => props.theme.hoverTrans};
  }
`;

export const SaveTags = styled.div`
  position: absolute;
  bottom: -45px;
  left: 0px;
`;

export const AddTagsSuccess = styled.div`
  color: ${props => props.theme.fontSuccessColor};
  font-size: 0.9em;
  font-weight: 600;
  animation: ${fadeInAni} 0.3s ease;

  & > span {
    color: ${props => props.theme.mainFontColorMedium};
    cursor: pointer;
    transition: ${props => props.theme.hoverTrans};

    &:hover {
      transition: ${props => props.theme.hoverTrans};
      color: ${props => props.theme.mainFontColorLight};
    }
  }
`;

export const AddTagsError = styled.div`
  color: ${props => props.theme.fontWarningColor};
  font-size: 0.9em;
  font-weight: 600;
  animation: ${fadeInAni} 0.3s ease;

  & > span {
    color: ${props => props.theme.mainFontColorMedium};
    cursor: pointer;
    transition: ${props => props.theme.hoverTrans};

    &:hover {
      transition: ${props => props.theme.hoverTrans};
      color: ${props => props.theme.mainFontColorLight};
    }
  }
`;
