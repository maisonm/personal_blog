import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { FooterContainer, Copywright, FooterSocialLinks } from './styles';

//Utils
import { social_links } from '../../../utils/social_links';

//Components
import Icon from '../../Icons/Icon';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocialLinks>
        <a href={social_links.github()} target="_blank">
          <Icon
            icon={['fab', 'github']}
            size="xxl"
            color="mainIconColor"
            cursor="pointer"
            hovercolor="secondaryIconColor"
          />
        </a>
        <a href={social_links.linkedIn()} target="_blank">
          <Icon
            icon={['fab', 'linkedin-in']}
            size="xxl"
            color="mainIconColor"
            cursor="pointer"
            hovercolor="secondaryIconColor"
          />
        </a>
        <a href={social_links.instagram()} target="_blank">
          <Icon
            icon={['fab', 'instagram']}
            size="xxl"
            color="mainIconColor"
            cursor="pointer"
            hovercolor="secondaryIconColor"
          />
        </a>
        <Link to="/contact">
          <Icon
            icon={['far', 'envelope']}
            size="xxl"
            color="mainIconColor"
            cursor="pointer"
            hovercolor="secondaryIconColor"
          />
        </Link>
      </FooterSocialLinks>
      <Copywright>
        <p>Designed and developed by Maison Moa</p>
        <p>Copyright © {`${new Date().getFullYear()}`}</p>
      </Copywright>
    </FooterContainer>
  );
};

export default Footer;
