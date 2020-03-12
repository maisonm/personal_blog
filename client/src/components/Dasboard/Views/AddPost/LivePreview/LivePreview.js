import React from 'react';
import propTypes from 'prop-types';
//Components
import HtmlComponent from '../../../../HtmlComponent/HtmlComponent';

//styles
import { LivePreviewContainer } from './styles';

const LivePreview = ({ htmlstring }) => {
  return (
    <LivePreviewContainer>
      <HtmlComponent htmlBody={htmlstring} />
    </LivePreviewContainer>
  );
};

export default LivePreview;

LivePreview.propTypes = {
  htmlstring: propTypes.string.isRequired
};
