import React from 'react';
import PropTypes from 'prop-types';

//Styling
import { PageContainer, PageTitle, ChildrenContainer } from './styles';

const Page = props => {
  const { children, pageTitle } = props;

  return (
    <PageContainer>
      <PageTitle>
        <h2>{pageTitle}</h2>
      </PageTitle>
      <ChildrenContainer>{children}</ChildrenContainer>
    </PageContainer>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired
};
