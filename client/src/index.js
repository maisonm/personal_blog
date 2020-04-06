import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { main_theme } from './components/theme/main_theme';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './modules/store/store';

// Components
import Navigation from './components/PageBase/Navigation/Navigation';
import Footer from './components/PageBase/Footer/Footer';
import Blog from './components/Pages/Blog/Blog';
import Dashboard from './components/Dasboard/Dashboard';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About/About';
//FA
import fontawesome from './fontawesome_library/fontawesome';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  <Router>
    <ReduxProvider store={reduxStore}>
      <ThemeProvider theme={main_theme}>
        <div className="appContainer">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/dashboard/user/:userid*" component={Dashboard} />
          <Footer />
        </div>
      </ThemeProvider>
    </ReduxProvider>
  </Router>,

  document.getElementById('root')
);
