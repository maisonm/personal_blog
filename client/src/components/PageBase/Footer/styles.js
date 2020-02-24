import styled, { keyframes } from "styled-components"

export const FooterContainer = styled.div`
  background: ${props => props.theme.footerBg};
  width: 100%;
  padding: 0px 10px;
  height: 200px;
  color: ${props => props.theme.whiteFontColor};
`
