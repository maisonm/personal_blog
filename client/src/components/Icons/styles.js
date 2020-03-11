import styled from 'styled-components';

export const IconSpan = styled.span`
  font-size: ${props => props.size};
  color: ${props => props.theme[props.color]};
`;
