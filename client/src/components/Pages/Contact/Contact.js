import React, { useEffect, useState } from 'react';

//Redux
import { connect } from 'react-redux';
import NAVBAR_ACTIONS from '../../../modules/actions/navbar_actions';

//Components
import Emoji from 'react-emoji-render';
import SocialLinks from '../Home/Components/SocialMediaLinks/SocialLinks';

//Styles
import {
  ContactPageContainer,
  ContactPageHeader,
  ContactPageInputWrap,
} from './styles';

//Layout
import Page from '../../Layout/Page';

const Contact = ({ navlinkActive }) => {
  useEffect(() => {
    navlinkActive('Contact');
  }, []);
  return (
    <ContactPageContainer>
      <ContactPageHeader>
        <div>
          <h2>Let's get in touch.</h2>
        </div>

        <SocialLinks position={false} animation={null} />
      </ContactPageHeader>
      <ContactPageInputWrap>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />

        <label htmlFor="email">Email</label>
        <input type="email" id="name" />

        <label htmlFor="message">Message</label>
        <textarea id="message"></textarea>

        <button type="button">Send Message</button>
      </ContactPageInputWrap>
    </ContactPageContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  navlinkActive: (link) => dispatch(NAVBAR_ACTIONS.navlinkActive(link)),
});

export default connect(null, mapDispatchToProps)(Contact);
