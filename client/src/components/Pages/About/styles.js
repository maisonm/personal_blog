import styled from 'styled-components';

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AboutMeBlock = styled.div`
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AboutMeBlockHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  & > p {
    padding: 4px 14px;
    border-radius: 2px;
    background: black;
    color: white;
  }
`;

export const AboutMeBlockDetails = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > div {
    margin-left: 14px;
  }
`;

export const AboutMeBlockText = styled.div`
  width: 100%;
  margin-top: 20px;
  font-size: 0.94em;
  font-weight: 500;
  letter-spacing: 0.2px;
  color: ${props => props.theme.mainFontColorMediumDark};
  line-height: 1.5;

  & > p {
    margin-bottom: 18px;
  }
`;