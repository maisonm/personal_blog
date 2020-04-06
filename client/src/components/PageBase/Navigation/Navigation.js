import React from 'react';

//Styles
import {
  NavigationContainer,
  NameContainer,
  NameMain,
  NameUnder,
  LinkContainer,
  NameLeft,
  NameRight,
  SearchContainer,
  NameDivide,
} from './styles';

//Semantic Search
import Search from '../../SemanticSearch/Search';

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
          <NameLeft>M</NameLeft>
          <NameDivide></NameDivide>
          <NameRight>M</NameRight>
        </NameMain>
      </NameContainer>
      <LinkContainer>
        <Links links={navLinks} />
        <SearchContainer>
          <Search
            data={[
              {
                title: 'Hello Clarice',
              },
              {
                title: 'James Jones',
              },
            ]}
          />
        </SearchContainer>
      </LinkContainer>
    </NavigationContainer>
  );
};

export default Navigation;
