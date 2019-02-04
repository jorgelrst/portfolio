import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import NavBar from 'components/NavBar';
import VideoBackground from 'components/VideoBackground';

import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="Jorge's Portfolio - %s"
      defaultTitle="Jorge's Developer Portfolio"
    >
      <meta name="description" content="George's Developer Portfolio" />
    </Helmet>

    <NavBar />

    <div className="routed-components">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>

    <div className="background-tint" />
    <div className="background-image-overlay" />
    <VideoBackground />
  </div>
);

export default App;
