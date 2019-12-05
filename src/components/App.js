import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import MoviesPage from '../pages/MoviesPage/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import Navigation from './Navigation/Navigation';
import routes from '../routes';

const App = () => {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path={routes.HOME} exact component={HomePage} />
        <Route path={routes.MOVIE_DETAILS} component={MovieDetailsPage} />
        <Route path={routes.MOVIES} component={MoviesPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default App;
