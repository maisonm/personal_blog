import styled, { keyframes } from 'styled-components';

export const NavigationContainer = styled.div`
  background: ${props => props.theme.navigationBg};
  width: 100%;
  padding: 0px 40px;
  height: 60px;
  color: ${props => props.theme.whiteFontColor};
  display: flex;
  justify-content: space-between;
  z-index: 10000;
`;
export const NameContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameMain = styled.div`
  display: flex;
  & > img {
    width: 8px;
    margin-left: 6px;
    margin-right: 6px;
  }

  & > p {
    font-size: 1.2em;
  }
`;

export const NameUnder = styled.div`
  width: 100%;
  font-size: 0.65em;
  color: ${props => props.theme.mainFontColorLight};
  padding-left: 14px;
`;
export const LinkContainer = styled.div`
  width: 24%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
