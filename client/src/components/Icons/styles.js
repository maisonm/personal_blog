import styled from 'styled-components';

export const IconContainer = styled.div`
  font-size: ${props => props.size};
  color: ${props =>
    props.active ? props.theme[props.hovercolor] : props.theme[props.color]};
  cursor: ${props => (props.cursor ? props.cursor : null)};
  transition: ${props => props.theme.hoverTrans};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  &:hover {
    transition: ${props => props.theme.hoverTrans};
    color: ${props =>
      props.hoverColor ? props.hovercolor : props.theme.secondaryIconColor};
  }

  & > p {
    font-size: 0.65em;
    font-weight: 500;
    margin-left: 8px;
  }
`;
