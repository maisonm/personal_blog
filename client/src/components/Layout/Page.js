import React from 'react';
import PropTypes from 'prop-types';

//Styling
import { PageContainer, PageTitle, ChildrenContainer } from './styles';

const Page = props => {
  const { children, pageTitle, noheader } = props;

  return (
    <PageContainer noheader={noheader}>
      {noheader ? null : (
        <PageTitle>
          <h2>{pageTitle}</h2>
        </PageTitle>
      )}

      <ChildrenContainer noheader={noheader}>{children}</ChildrenContainer>
    </PageContainer>
  );
};

export default Page;

Page.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string.isRequired,
  noheader: PropTypes.bool
};
