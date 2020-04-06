import React, { useEffect } from 'react';

//Redux
import { connect } from 'react-redux';
import NAVBAR_ACTIONS from '../../../modules/actions/navbar_actions';

import { Link } from 'react-router-dom';

//Styles
import {
  HomePageHero,
  LatestPostsHeader,
  HeroHeader,
  HeroText,
  HeroViewPosts,
} from './styles';

//Components
import Page from '../../Layout/Page';
import Blog from '../Blog/Blog';
import SocialLinks from './Components/SocialMediaLinks/SocialLinks';

const Home = (props) => {
  useEffect(() => {
    props.navlinkActive('Home');
  }, []);
  return (
    <Page noheader={true} pageTitle="">
      <HomePageHero>
        <HeroHeader>
          <p>Maison</p>
          <div></div>
          <p>Moa</p>
        </HeroHeader>
        <HeroText>
          <p>
            Hey there! I'm a Javascript developer specializing in React. This is
            my blog on modern web development.
          </p>
        </HeroText>
        <HeroViewPosts>
          <Link
            to="/blog"
            onClick={() => {
              props.navlinkActive('Blog');
            }}
          >
            View My Blog
          </Link>
        </HeroViewPosts>
        <SocialLinks />
      </HomePageHero>
      <LatestPostsHeader>
        <h3>Latest Posts</h3>
      </LatestPostsHeader>
      <Blog pageTitle="Latest Posts" noheader={true} />
    </Page>
  );
};

const mapDispatchToProps = (dispatch) => ({
  navlinkActive: (link) => dispatch(NAVBAR_ACTIONS.navlinkActive(link)),
});

export default connect(null, mapDispatchToProps)(Home);
