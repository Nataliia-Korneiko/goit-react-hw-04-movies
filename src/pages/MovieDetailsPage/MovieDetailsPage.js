import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css';
import * as API from '../../services/movies-api';
import routes from '../../routes';

const ativeLink = {
  color: 'palevioletred',
};

class MovieDetailsPage extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}.isRequired),
      url: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({ goBack: PropTypes.func.isRequired }).isRequired,
  };

  state = {
    movie: {
      genres: [],
    },
  };

  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.getMovieDetails(movieId).then(res => {
      this.setState({ movie: res.data });
    });
  };

  handleGoback = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    const genres = movie.genres.reduce((acc, el) => `${acc} ${el.name}`, '');

    return (
      <div className={s.MovieDetailsPageContainer}>
        <button
          className={s.MovieDetailsPageButton}
          type="button"
          onClick={this.handleGoback}
        >
          Go back
        </button>
        {movie.original_title && (
          <div className={s.MovieDetailsPageAbout}>
            <img
              className={s.MovieDetailsPageImg}
              alt={movie.original_title}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <div className={s.MovieDetailsPageInfo}>
              <h2 className={s.MovieDetailsPageMainTitle}>
                {movie.original_title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p className={s.MovieDetailsPageScore}>
                User Score: {movie.vote_average * 10}%
              </p>

              <p className={s.MovieDetailsPageOverview}>Overview:</p>
              <p className={s.MovieDetailsPageOverviewAbout}>
                {movie.overview}
              </p>
              <p className={s.MovieDetailsPageGenres}>Genres:</p>
              <p>{genres}</p>
            </div>
          </div>
        )}
        <p className={s.MovieDetailsPageTitle}>Additional information:</p>
        <ul className={s.MovieDetailsPageList}>
          <li>
            <NavLink
              to={`${match.url}/cast`}
              activeStyle={ativeLink}
              className={s.MovieDetailsPageLink}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${match.url}/reviews`}
              activeStyle={ativeLink}
              className={s.MovieDetailsPageLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path={routes.CAST} component={Cast} />
          <Route path={routes.REVIEWS} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
