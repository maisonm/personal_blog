import React, { useState } from 'react';

import propTypes from 'prop-types';

//Components
import Icon from '../../Icons/Icon';

//Styles
import { Navlink, LinkContainer, IconContainer } from './styles';

const SideNav = ({ setView }) => {
  const [selectedView, setSelectedView] = useState('add post');
  return (
    <LinkContainer>
      <Navlink
        onClick={() => {
          setView('add post');
          setSelectedView('add post');
        }}
      >
        <Icon
          icon={['far', 'plus-square']}
          size="xl"
          color="mainIconColor"
          cursor="pointer"
          hovercolor="secondaryIconColor"
          active={selectedView === 'add post' ? true : false}
        >
          <span>Add Post</span>
        </Icon>
        {selectedView === 'add post' ? (
          <IconContainer>
            <Icon
              icon={['far', 'arrow-alt-circle-right']}
              size="lg"
              color="secondaryFontColor"
            />
          </IconContainer>
        ) : null}
      </Navlink>
      <Navlink
        onClick={() => {
          setView('published posts');
          setSelectedView('published posts');
        }}
      >
        <Icon
          icon={['far', 'play-circle']}
          size="xl"
          color="mainIconColor"
          cursor="pointer"
          hovercolor="secondaryIconColor"
          active={selectedView === 'published posts' ? true : false}
        >
          <span> Published Posts </span>
        </Icon>
        {selectedView === 'published posts' ? (
          <IconContainer>
            <Icon
              icon={['far', 'arrow-alt-circle-right']}
              size="lg"
              color="secondaryFontColor"
            />
          </IconContainer>
        ) : null}
      </Navlink>
      <Navlink
        onClick={() => {
          setView('drafts');
          setSelectedView('drafts');
        }}
      >
        <Icon
          icon={['far', 'sticky-note']}
          size="xl"
          color="mainIconColor"
          cursor="pointer"
          hovercolor="secondaryIconColor"
          active={selectedView === 'drafts' ? true : false}
        >
          <span> Drafts </span>
        </Icon>
        {selectedView === 'drafts' ? (
          <IconContainer>
            <Icon
              icon={['far', 'arrow-alt-circle-right']}
              size="lg"
              color="secondaryFontColor"
            />
          </IconContainer>
        ) : null}
      </Navlink>
      <Navlink
        onClick={() => {
          setView('manage posts');
          setSelectedView('manage posts');
        }}
      >
        <Icon
          icon={['far', 'list-alt']}
          size="xl"
          color="mainIconColor"
          cursor="pointer"
          hovercolor="secondaryIconColor"
          active={selectedView === 'manage posts' ? true : false}
        >
          <span> Manage Posts </span>
        </Icon>
        {selectedView === 'manage posts' ? (
          <IconContainer>
            <Icon
              icon={['far', 'arrow-alt-circle-right']}
              size="lg"
              color="secondaryFontColor"
            />
          </IconContainer>
        ) : null}
      </Navlink>
      <Navlink
        onClick={() => {
          setView('metrics');
          setSelectedView('metrics');
        }}
      >
        <Icon
          icon={['far', 'chart-bar']}
          size="xl"
          color="mainIconColor"
          cursor="pointer"
          hovercolor="secondaryIconColor"
          active={selectedView === 'metrics' ? true : false}
        >
          <span> Metrics </span>
        </Icon>
        {selectedView === 'metrics' ? (
          <IconContainer>
            <Icon
              icon={['far', 'arrow-alt-circle-right']}
              size="lg"
              color="secondaryFontColor"
            />
          </IconContainer>
        ) : null}
      </Navlink>
    </LinkContainer>
  );
};

export default SideNav;

SideNav.propTypes = {
  setView: propTypes.func.isRequired
};
