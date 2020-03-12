import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import propTypes from 'prop-types';

//Styles
import '../Pages/Blog/components/PostBodyRender/index.css';

//Takes an HTML string and parses it for rendering
const HtmlComponent = ({ htmlBody }) => ReactHtmlParser(htmlBody);

export default HtmlComponent;

HtmlComponent.propTypes = {
  htmlBody: propTypes.string.isRequired
};
