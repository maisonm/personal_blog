import React from 'react';
import PropTypes from 'prop-types';

//Styling
import { PageContainer, PageTitle, ChildrenContainer } from './styles';

const Page = ({ children, pageTitle }) => (
  <PageContainer>
    <PageTitle>
      <h2>{pageTitle}</h2>
    </PageTitle>
    <ChildrenContainer>{children}</ChildrenContainer>
  </PageContainer>
);

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string.isRequired
};
