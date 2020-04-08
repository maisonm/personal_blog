import React from 'react';

import { Link } from 'react-router-dom';

import {
  Page404Container,
  PageImage404,
  Page404Message,
  PageImageContainer,
} from './styles';

//Assets
import Octo from './assets/octo-1.png';

import Page from '../../Layout/Page';

const Page404 = (props) => {
  return (
    <Page404Container>
      <PageImageContainer>
        <PageImage404 src={Octo} alt="404 image" />
      </PageImageContainer>

      <Page404Message>
        <p>
          Sorry, that page doesn't exist down here. <Link to="/">Go home.</Link>
        </p>
      </Page404Message>
    </Page404Container>
  );
};

export default Page404;
