import styled, { keyframes, css } from 'styled-components';

import {
  fadeIn,
  bounceInLeft,
  bounceInRight,
  bounceInUp
} from 'react-animations';

export const animations = {
  fade_in: keyframes(fadeIn),
  bounce_in_left: keyframes(bounceInLeft),
  bounce_in_right: keyframes(bounceInRight),
  bounce_in_up: keyframes(bounceInUp)
};
