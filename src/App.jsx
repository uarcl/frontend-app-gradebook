import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppProvider } from '@edx/frontend-platform/react';

import Footer from '@uarcl/frontend-component-footer-uar';
import Header from '@uarcl/frontend-component-header-uar';

import { routePath } from 'data/constants/app';
import store from 'data/store';
import GradebookPage from 'containers/GradebookPage';
import './App.scss';
import Head from './head/Head';

const App = () => (
  <AppProvider store={store}>
    <Head />
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route
              exact
              path={routePath}
              component={GradebookPage}
            />
          </Switch>
        </main>
        <Footer logo={process.env.LOGO_POWERED_BY_OPEN_EDX_URL_SVG} />
      </div>
    </Router>
  </AppProvider>
);

export default App;
