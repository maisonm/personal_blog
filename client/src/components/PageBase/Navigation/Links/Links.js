import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//Redux

import NAVBAR_ACTIONS from '../../../../modules/actions/navbar_actions';
import { connect } from 'react-redux';

import propTypes from 'prop-types';

//Styles
import { LinkContainer, LinkWrap } from './styles';

//Notes
//@Required: links array passed as props. Each object in the links array should contain a path and name property. Refer to propTypes definition at the bottom.

const Links = (props) => {
  const [clickedLink, setClickedLink] = useState('Home');

  useEffect(() => {
    setClickedLink(props.link);
  }, [props.link]);
  return (
    <LinkContainer>
      {props.links.map((link, i) => (
        <LinkWrap isActive={link.name === clickedLink ? true : false} key={i}>
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

const mapStateToProps = (state) => {
  console.log(state.link);

  return {
    link: state.link,
  };
};

export default connect(mapStateToProps)(Links);

Links.propTypes = {
  links: propTypes.arrayOf(
    propTypes.shape({
      path: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ).isRequired,
};
