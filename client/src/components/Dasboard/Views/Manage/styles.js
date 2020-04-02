import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const ManageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ManageControl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${props => props.theme.mainFontColorLight};
  margin-bottom: 14px;

  & > h5 {
    padding-bottom: 6px;
    border-bottom: 1.5px solid ${props => props.theme.borderBottomColor};
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const ManageTags = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 12px;

  & > input {
    margin-right: 8px;
    width: 25%;
    padding: 8px;
    border-radius: ${props => props.theme.borderRad};
    border: 1.5px solid ${props => props.theme.mainBorderColor};
    outline: none;
    font-size: ${props => props.theme.inputFontSizeSm};
  }

  & > button {
    padding: 8px 18px;
    margin-right: 8px;
    outline: none;
    border: 1.5px solid ${props => props.theme.mainBorderColor};
    border-radius: ${props => props.theme.borderRad};
    cursor: pointer;
    transition: ${props => props.theme.hoverTrans};

    &:hover {
      border: 1.5px solid ${props => props.theme.successBorderColor};
      transition: ${props => props.theme.hoverTrans};
    }
  }
`;
