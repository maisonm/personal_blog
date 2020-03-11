import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { main_theme } from './components/theme/main_theme';

// Components
import Navigation from './components/PageBase/Navigation/Navigation';
import Footer from './components/PageBase/Footer/Footer';
import Blog from './components/Pages/Blog/Blog';

//FA
import fontawesome from './fontawesome_library/fontawesome';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={main_theme}>
      <div className="appContainer">
        <Navigation />
        <Route exact path="/" component={Blog} />
        <Route exact path="/blog" component={Blog} />
        <Footer />
      </div>
    </ThemeProvider>
  </Router>,

  document.getElementById('root')
);
