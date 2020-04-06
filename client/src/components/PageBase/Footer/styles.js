import styled, { keyframes } from 'styled-components';

export const FooterContainer = styled.div`
  background: ${(props) => props.theme.footerBg};
  width: 100%;
  padding: 0px 10px;
  height: 130px;
  color: ${(props) => props.theme.whiteFontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Copywright = styled.div`
  text-align: center;
  font-weight: 500;
  font-size: 0.72em;
  color: ${(props) => props.theme.mainFontColorMedium};
`;

export const FooterSocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 14px;
  width: 15%;
`;
