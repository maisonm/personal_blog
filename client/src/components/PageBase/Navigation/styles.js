import styled from 'styled-components';

export const NavigationContainer = styled.div`
  background: ${(props) => props.theme.navigationBg};
  width: 100%;
  padding: 0px 40px;
  height: 60px;
  color: ${(props) => props.theme.whiteFontColor};
  display: flex;
  justify-content: space-between;
  z-index: 10000;
`;
export const NameContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: 1s ease-in ${(props) => props.theme.bounceInLeft};
`;

export const NameMain = styled.div`
  display: flex;
  & > p {
    font-size: 1em;
    font-weight: 400;
    font-weight: 600;
  }

  & > div {
    margin-left: 8px;
    margin-right: 8px;
    border: 1.5px solid ${(props) => props.theme.borderSecondaryColor};
  }
`;

export const NameUnder = styled.div`
  width: 100%;
  font-size: 0.65em;
  color: ${(props) => props.theme.mainFontColorLight};
  padding-left: 14px;
`;
export const LinkContainer = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  animation: 1s ease-in ${(props) => props.theme.bounceInRight};
`;
