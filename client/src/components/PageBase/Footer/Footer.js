import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import { FooterContainer, Copywright, FooterSocialLinks } from './styles';

//Components
import Icon from '../../Icons/Icon';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSocialLinks>
        <a href="https://github.com/maisonm" target="_blank">
          <Icon
            icon={['fab', 'github']}
            size="xxl"
            color="mainIconColor"
            cursor="pointer"
            hovercolor="secondaryIconColor"
          />
        </a>
        <a href="https://www.linkedin.com/in/maisonmoa" target="_blank">
          <Icon
            icon={['fab', 'linkedin-in']}
            size="xxl"
            color="mainIconColor"
            cursor="pointer"
            hovercolor="secondaryIconColor"
          />
        </a>
        <a href="https://www.instagram.com/maison_m/" target="_blank">
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
