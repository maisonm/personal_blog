import styled from 'styled-components';

export const LivePreviewContainer = styled.div`
  background: ${props => props.theme.bgAlt};
  padding: 10px 10px;
  border-radius: ${props => props.theme.inputBorderRad};
  border: ${props =>
    props.active ? props.theme.inputBorderActive : props.theme.inputBorder};
  width: 100%;
  margin-bottom: 20px;
  font-size: 1em;
  font-weight: 500;
  height: 500px;
  outline: none;
  overflow: auto;
`;
