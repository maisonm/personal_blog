import React from 'react';

//Styles
import { HomePageHero, HomePageIntro, HomePageIntroBlurb } from './styles';

//Components
import Page from '../../Layout/Page';

const Home = props => {
  return (
    <Page noheader={true} pageTitle="">
      <HomePageHero>
        <HomePageIntro>
          <HomePageIntroBlurb>
            <p>Hi there! My name is Maison.</p>
            <p>I'm a Florida based web developer specializing in React.</p>
          </HomePageIntroBlurb>
          <HomePageIntroBlurb offset={true}>
            <p>Feel free to email me anytime if you have a question!</p>
          </HomePageIntroBlurb>
          <HomePageIntroBlurb>
            <p>This blog was built with React, Express, MongoDb and love.</p>
          </HomePageIntroBlurb>
        </HomePageIntro>
      </HomePageHero>
    </Page>
  );
};

export default Home;
