import React from 'react';

//Styles
import {
  NavigationContainer,
  NameContainer,
  NameMain,
  NameUnder,
  LinkContainer
} from './styles';

//Components
import Links from './Links/Links';

//Assets
import bolt from './assets/bolt.svg';

const navLinks = [
  {
    path: '/',
    name: 'Home'
  },
  {
    path: '/blog',
    name: 'Blog'
  },
  {
    path: '/about',
    name: 'About'
  },
  {
    path: '/portfolio',
    name: 'Portfolio'
  },
  {
    path: '/contact',
    name: 'Contact'
  }
];

const Navigation = () => {
  return (
    <NavigationContainer>
      <NameContainer>
        <NameMain>
          <p>Maison</p>
          <img src={bolt} alt="bolt logo" />
          <p>Moa</p>
        </NameMain>
        <NameUnder>
          <p>Javascript Developer</p>
        </NameUnder>
      </NameContainer>
      <LinkContainer>
        <Links links={navLinks} />
      </LinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
