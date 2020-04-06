import React from 'react';

//Styles
import {
  NavigationContainer,
  NameContainer,
  NameMain,
  NameUnder,
  LinkContainer,
} from './styles';

//Components
import Links from './Links/Links';

//Assets
import bolt from './assets/bolt.svg';

const navLinks = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
];

const Navigation = () => {
  return (
    <NavigationContainer>
      <NameContainer>
        <NameMain>
          <p>M</p>
          <div></div>
          <p>M</p>
        </NameMain>
      </NameContainer>
      <LinkContainer>
        <Links links={navLinks} />
      </LinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
