import React from 'react';
const api = require('../../api/index');

const GlobalApiRoutes = (Component) => {
  return class InjectApiRoutes extends React.Component {
    render() {
      return <Component api={api.routes} {...this.props} />;
    }
  };
};

export default GlobalApiRoutes;
