import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';

//Styles
import {
  DashboardContainer,
  DashboardNavigation,
  DashboardView
} from './styles';

//Components
import Page from '../Layout/Page';
import SideNav from './SideNav/SideNav';
import AddPost from './Views/AddPost/AddPost';
import InjectApiRoutes from '../Hoc/InjectApiRoutes';

const Dashboard = ({ api }) => {
  const [selectedView, setSelectedView] = useState('add post');

  const selectedViewSelection = view => setSelectedView(view);

  const returnSelectedView = () => {
    switch (selectedView) {
      case 'add post':
        return <AddPost api={api} />;
        break;
      case 'published posts':
        return <div>Published Posts</div>;
        break;
      case 'drafts':
        return <div>Drafts</div>;
        break;
      case 'manage posts':
        return <div>manage posts</div>;
        break;
      case 'metrics':
        return <div>Metrics</div>;
        break;
    }
  };

  return (
    <Page pageTitle="Dashboard">
      <DashboardContainer>
        <DashboardNavigation>
          <SideNav setView={selectedViewSelection} />
        </DashboardNavigation>
        <DashboardView>{returnSelectedView()}</DashboardView>
      </DashboardContainer>
    </Page>
  );
};

export default InjectApiRoutes(Dashboard);

Dashboard.propTypes = {
  api: propTypes.object.isRequired
};
