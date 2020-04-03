import React from 'react';

//Styles
import {
  HomePageHero,
  HomePageIntro,
  HomePageIntroBlurb,
  LatestPostsHeader
} from './styles';

//Components
import Page from '../../Layout/Page';
import Blog from '../Blog/Blog';
import SocialLinks from './Components/SocialMediaLinks/SocialLinks';

const Home = props => {
  return (
    <Page noheader={true} pageTitle="">
      <HomePageHero>
        <HomePageIntro>
          <HomePageIntroBlurb>
            <p>Hi there! My name is Maison.</p>
            <p>
              I'm a Florida based Javascript developer specializing in React.
            </p>
          </HomePageIntroBlurb>
          <HomePageIntroBlurb offset={true}>
            <p>Feel free to email me anytime if you have a question!</p>
          </HomePageIntroBlurb>
          <HomePageIntroBlurb>
            <p>This blog was built with React, Express, MongoDb and love.</p>
          </HomePageIntroBlurb>
        </HomePageIntro>
        <SocialLinks />
      </HomePageHero>
      <LatestPostsHeader>
        <h3>Latest Posts</h3>
      </LatestPostsHeader>
      <Blog pageTitle="Latest Posts" noheader={true} />
    </Page>
  );
};

export default Home;
