import React from 'react';

//styles
import {
  AboutContainer,
  AboutMeBlock,
  AboutMeBlockHeader,
  AboutMeBlockDetails,
  AboutMeBlockText
} from './styles';

//Components
import Page from '../../Layout/Page';
import Icon from '../../Icons/Icon';

const About = props => {
  return (
    <Page pageTitle="About Me">
      <AboutContainer>
        <AboutMeBlock>
          <AboutMeBlockHeader>
            <p>Maison Moa</p>
            <AboutMeBlockDetails>
              <Icon
                color="mainFontColorMediumDark"
                pColor="mainFontColor"
                icon={['far', 'compass']}
                pSize=".85em"
                cursor="pointer"
                hovercolor="secondaryFontColor"
              >
                Lakeland, Florida
              </Icon>
              <Icon
                color="mainFontColorMediumDark"
                pColor="mainFontColor"
                icon={['far', 'envelope']}
                pSize=".85em"
                cursor="pointer"
                hovercolor="secondaryFontColor"
              >
                <a href="#" target="_blank">
                  maison.moa@gmail.com
                </a>
              </Icon>
              <Icon
                color="mainFontColorMediumDark"
                pColor="mainFontColor"
                icon={['far', 'dot-circle']}
                pSize=".85em"
                cursor="pointer"
                hovercolor="secondaryFontColor"
              >
                <a href="" target="_blank">
                  LinkedIn
                </a>
              </Icon>
              <Icon
                color="mainFontColorMediumDark"
                pColor="mainFontColor"
                icon={['far', 'dot-circle']}
                pSize=".85em"
                cursor="pointer"
                hovercolor="secondaryFontColor"
              >
                <a href="" target="_blank">
                  Github
                </a>
              </Icon>
            </AboutMeBlockDetails>
          </AboutMeBlockHeader>
          <AboutMeBlockText>
            <p>
              Aside from developement work, I like to spend my time on the golf
              course (if you want to golf, I'm not saying no), tending to my
              house plants, canoeing down some river, or grabbing a beer (or
              two) with friends. I consider myself a visual learner, and I
              really like to get my hands dirty. More times than not, I throw
              myself headfirst into something, even if I have no clue how to do
              it. I've had a good success rate doing just that. The more
              challenging the better. I learn by doing, and I am not afraid to
              make an attempt on something, even if it ends in failure.
            </p>
            <p>
              I am available for contact anytime via email. You can view my
              email, Github, or Linkedin via the social links above & below. If
              you have a question about one of my repos, or heck, maybe you even
              want to hire me, feel free to fire away!
            </p>
          </AboutMeBlockText>
        </AboutMeBlock>
        <AboutMeBlock>
          <AboutMeBlockHeader>
            <p>Technical</p>
            <AboutMeBlockDetails></AboutMeBlockDetails>
          </AboutMeBlockHeader>
          <AboutMeBlockText>
            <p>
              The scope of my work deals largely with the frontend: React,
              responsive development, SASS/CSS3, Flexbox, Bootstrap, Javascript
              (ES6), HTML5, and all other facets of front-end development like
              user experience, customer relations, etc. As for the backend, I
              typically utalize NodeJs and MongoDb to create Express API's for
              my applications. I typically use AWS Elastic Beanstalk for
              deployment . With that, I also utalize Heroku for smaller sandbox
              applications.
            </p>
          </AboutMeBlockText>
        </AboutMeBlock>
      </AboutContainer>
    </Page>
  );
};

export default About;
