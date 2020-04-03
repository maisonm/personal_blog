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
      props.hovercolor ? props.theme[props.hovercolor] : null};
  }

  & > p {
    font-size: ${props => (props.pSize ? props.pSize : '0.65em')};
    font-weight: 500;
    margin-left: 6px;
    color: ${props => props.theme[props.pColor]};
    & > a {
      text-decoration: none;
      color: inherit;
    }
  }
`;
