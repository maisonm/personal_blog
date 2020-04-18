import styled from 'styled-components';

export const ContactPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.bgDark};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 80px 40px;
  color: ${(props) => props.theme.mainFontColorLight};
`;

export const ContactPageHeader = styled.div`
  width: 55%;
  position: relative;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${(props) => props.theme.bounceInLeft} 1s ease;

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 18px;
    & > h2 {
      margin: 0;
    }
  }
`;

export const ContactPageInputWrap = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  animation: ${(props) => props.theme.fadeIn} 1s ease;

  & > label {
    margin-bottom: 10px;
    font-size: 1.1em;
  }

  & > input {
    border-right: none;
    border-left: none;
    border-top: none;
    border-bottom: ${(props) => props.theme.inputBorderLight};
    background: none;
    outline: none;
    padding-bottom: 18px;
    font-size: 1.6em;
    color: ${(props) => props.theme.whiteFontColor};
    margin-bottom: 40px;
  }

  & > textarea {
    background: none;
    height: 200px;
    border: ${(props) => props.theme.inputBorderLight};
    outline: none;
    color: ${(props) => props.theme.mainFontColorLight};
    padding: 8px;
    font-size: 1.05em;
    border-radius: ${(props) => props.theme.borderRad};
  }

  & > button {
    width: 100%;
    margin-top: 18px;
    background: ${(props) => props.theme.mainBtnBgLight};
    padding: 8px;
    text-align: center;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.2px;
    font-size: 1.1em;
    transition: ${(props) => props.theme.hoverTrans};
    border-radius: 0.3px;

    &:hover {
      transition: ${(props) => props.theme.hoverTrans};
      background: ${(props) => props.theme.mainBtnBg};
    }
  }
`;
