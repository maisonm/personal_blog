import styled from 'styled-components';

export const PostPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const PostDetails = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 15%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  height: 140px;

  & > p {
    margin-bottom: -8px;
    font-size: 0.95em;
    color: ${(props) => props.theme.mainFontColorMedium};
    font-size: 0.7em;
    font-weight: 500;
  }

  & > span {
    font-size: 0.9em;
    color: ${(props) => props.theme.mainFontColorMediumDark};
    font-weight: 600;
  }
`;

export const PostFeaturedImage = styled.img`
  width: 500px;
  margin-bottom: 50px;
`;
export const PostBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
`;
