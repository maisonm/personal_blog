import React, { useEffect } from 'react';

//styles
import {
  AboutContainer,
  AboutMeBlock,
  AboutMeBlockHeader,
  AboutMeBlockDetails,
  AboutMeBlockDetailsLogos,
  AboutMeBlockText,
} from './styles';

import { connect } from 'react-redux';
import NAVBAR_ACTIONS from '../../../modules/actions/navbar_actions';

//Assets
import awsLogo from './assets/aws.svg';
import css3 from './assets/css3.svg';
import git from './assets/git.svg';
import html5 from './assets/html5.svg';
import js from './assets/js.svg';
import mongoLogo from './assets/mongo.svg';
import nodeLogo from './assets/node.svg';
import reactLogo from './assets/react.svg';
import reduxLogo from './assets/redux.svg';
import sassLogo from './assets/sass.svg';

//Components
import Page from '../../Layout/Page';
import Icon from '../../Icons/Icon';

const About = ({ navlinkActive }) => {
  useEffect(() => {
    navlinkActive('About');
  }, []);
  return (
    <Page pageTitle="About Me">
      <AboutContainer>
        <AboutMeBlock>
          <AboutMeBlockHeader>
            <p>Maison Moa</p>
            <AboutMeBlockDetails>
              <Icon
                color="secondaryFontColor"
                pColor="mainFontColor"
                icon={['far', 'compass']}
                pSize=".85em"
              >
                Lakeland, Florida
              </Icon>
              <Icon
                color="secondaryFontColor"
                pColor="mainFontColor"
                icon={['far', 'envelope']}
                pSize=".85em"
                cursor="pointer"
                hovercolor="mainFontColorMedium"
              >
                <a href="#" target="_blank">
                  maison.moa@gmail.com
                </a>
              </Icon>
              <Icon
                color="secondaryFontColor"
                pColor="mainFontColor"
                icon={['far', 'dot-circle']}
                pSize=".85em"
                cursor="pointer"
                hovercolor="mainFontColorMedium"
              >
                <a href="https://www.linkedin.com/in/maisonmoa" target="_blank">
                  LinkedIn
                </a>
              </Icon>
              <Icon
                color="secondaryFontColor"
                pColor="mainFontColor"
                icon={['far', 'dot-circle']}
                pSize=".85em"
                cursor="pointer"
                hovercolor="mainFontColorMedium"
              >
                <a href="https://github.com/maisonm" target="_blank">
                  Github
                </a>
              </Icon>
            </AboutMeBlockDetails>
          </AboutMeBlockHeader>
          <AboutMeBlockText>
            <p>
              Aside from doing battle in the many Javascript realms, I like to
              spend my time on the golf course (if you wanted to golf, I'm not
              saying no), tending to my house plants, exploring one of my many
              random ideas, or grabbing a beer (or two). I'm simple, okay!
            </p>
            <p>
              I am very passionate about development, and the entire learning
              process that comes along with modern web development. I have been
              very fortunate to make way into a career doing what I honestly
              love to do. Technically speaking, I have a full-time love affair
              with React and the ecosystems surrounding it! As many modern
              developers, I also harbor a part-time affair with NodeJs/Express.
              Those frontend clients need API's after all! My optimism for the
              future of web development and it's many communities is at an all
              time high.
            </p>
            <p>
              I am available for contact anytime via email. You can view my
              Email, Github, or Linkedin via the social links above & below. If
              you have a question about one of my repos, or heck, maybe you even
              want to work with me, feel free to send away!
            </p>
          </AboutMeBlockText>
        </AboutMeBlock>
        <AboutMeBlock>
          <AboutMeBlockHeader>
            <p>Technical</p>
            <AboutMeBlockDetails>
              <AboutMeBlockDetailsLogos>
                <img className="sm" src={js} alt="tech logos" />
                <img src={reactLogo} alt="tech logos" />
                <img src={reduxLogo} alt="tech logos" />
                <img className="xl" src={nodeLogo} alt="tech logos" />
                <img className="xxl" src={mongoLogo} alt="tech logos" />
                <img src={git} alt="tech logos" />
                <img src={awsLogo} alt="tech logos" />
                <img src={html5} alt="tech logos" />
                <img src={css3} alt="tech logos" />
                <img src={sassLogo} alt="tech logos" />
              </AboutMeBlockDetailsLogos>
            </AboutMeBlockDetails>
          </AboutMeBlockHeader>
          <AboutMeBlockText>
            <p>
              The scope of my work deals largely with frontend engineering using
              React, with a sprinkle of NodeJs and Express. That also includes
              the ecosystem surrounding React: Redux, styled-components, Gatsby,
              semantic-ui, etc. My personal site and blogging platform was built
              using React Hooks, Redux, NodeJs, Express and MongoDB. It is
              currently up and running on an AWS Elastic Beantalk EC2 instance.
              You can check out the repo for this site here:
            </p>
          </AboutMeBlockText>
        </AboutMeBlock>
      </AboutContainer>
    </Page>
  );
};

const mapDispatchToProps = (dispatch) => ({
  navlinkActive: (link) => dispatch(NAVBAR_ACTIONS.navlinkActive(link)),
});

export default connect(null, mapDispatchToProps)(About);
