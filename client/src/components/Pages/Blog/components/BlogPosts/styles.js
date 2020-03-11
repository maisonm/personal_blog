import styled from 'styled-components';

export const BlogPostListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const BlogListCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 0px;
  border-bottom: solid 1px ${props => props.theme.mainBorderColor};
  margin-bottom: 4px;
  height: 140px;
  cursor: pointer;
  transition: ${props => props.theme.animationTrans};

  &:hover {
    transition: ${props => props.theme.animationTrans};
    border-bottom: solid 1px ${props => props.theme.altBorderColor};
  }
`;

export const BlogPostHeader = styled.h3``;

export const BlogPostDescription = styled.div`
  overflow: none;
  color: ${props => props.theme.mainFontColorMedium};
  width: 60%;
  font-weight: 500;
  letter-spacing: -0.5px;
`;

export const BlogPostInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const BlogPostInfoBox = styled.div`
  font-size: 0.8em;
  font-weight: 500;
  margin-right: 14px;
  color: ${props => props.theme.secondaryFontColor};

  & > p span {
    margin-right: 4px;
  }

  & > p span:nth-child(2) {
    color: ${props => props.theme.mainFontColorMedium};
  }
`;
