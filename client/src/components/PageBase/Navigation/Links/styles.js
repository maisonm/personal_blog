import styled from 'styled-components';

export const LinkContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-bottom: 3px solid
    ${props =>
      props.isActive
        ? `${props.theme.secondaryFontColor}`
        : `${props.theme.navigationBg}`};
  transition: ${props => props.theme.hoverTrans};

  &:hover {
    transition: ${props => props.theme.hoverTrans};
    border-bottom: 3px solid ${props => props.theme.secondaryFontColor};
  }
  & > a {
    text-decoration: none;
    color: ${props => props.theme.mainFontColorLight};
    font-size: 0.88em;
    cursor: pointer;
    transition: ${props => props.theme.hoverTrans};

    &:hover {
      transition: ${props => props.theme.hoverTrans};
      color: ${props => props.theme.secondaryFontColor};
    }
  }
`;
