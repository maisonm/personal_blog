import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const SemanticContainer = styled.div`
  & .input {
    width: 185px;
    height: 30px;
  }

  & .ui.icon {
    color: ${(props) => props.theme.mainFontColorMediumDark};
  }
  & .ui.icon.input > input {
    border-radius: 3px !important;
    background: ${(props) => props.theme.inputBgLight} !important;
    border: none;
    font-size: 0.9em;
    padding: 4px 4px 8px 8px;

    &::placeholder {
      font-size: 0.9em;
      color: ${(props) => props.theme.mainFontColorMedium};
    }
  }
  & .ui.search > .results {
    max-height: 300px;
    overflow: auto;
    position: absolute;
    width: 100%;
    animation-delay: 0.3s;
    animation: 0.5s ease ${fadeInAnimation};
    transition: ${(props) => props.theme.hoverTrans};
  }
`;
