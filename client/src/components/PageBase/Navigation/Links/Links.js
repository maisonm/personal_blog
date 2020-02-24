import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

//Styles
import { LinkContainer, LinkWrap } from './styles';

//Notes
//@Required: links array passed as props. Each object in the links array should contain a path and name property. Refer to propTypes definition at the bottom.

const Links = ({ links }) => {
  const [clickedLink, setClickedLink] = useState(undefined);
  return (
    <LinkContainer>
      {links.map((link, i) => (
        <LinkWrap isActive={link.name === clickedLink ? true : false}>
          <Link
            to={link.path}
            onClick={() => {
              setClickedLink(link.name);
            }}
          >
            {link.name}
          </Link>
        </LinkWrap>
      ))}
    </LinkContainer>
  );
};

export default Links;

Links.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      path: propTypes.string.isRequired,
      name: propTypes.string.isRequired
    })
  ).isRequired
};
