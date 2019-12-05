import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Switch, Route } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import * as API from '../../services/movies-api';
import routes from '../../routes';

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
      // console.log('res', res);
      this.setState({ movie: res.data });
    });
  };

  handleGoback = () => {
    const { history } = this.props;

    // if (location.state) {
    //   return history.push(history => ({
    //     ...history,
    //     pathname: location.state.from,
    //   }));
    // }

    // history.push('/'); // проверить!!!
    history.goBack();
    // history.push(location.state.from); // проверить!!!
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    const genres = movie.genres.reduce((acc, el) => `${acc} ${el.name}`, '');

    // console.log(genres);

    return (
      <div>
        <button type="button" onClick={this.handleGoback}>
          Go back
        </button>
        {movie.original_title && (
          <div>
            <img
              alt={movie.original_title}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
            <h2>
              {movie.original_title} ({movie.release_date.slice(0, 4)})
            </h2>
            <p>User Score: {movie.vote_average * 10}%</p>

            <p>Overview {movie.overview}</p>
            <p>Genres {genres}</p>
            <p>Additional information</p>
            <ul>
              <li>
                <NavLink to={`${match.url}/cast`}>Cast</NavLink>
              </li>
              <li>
                <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
              </li>
            </ul>
          </div>
        )}
        <Switch>
          <Route path={routes.CAST} component={Cast} />
          <Route path={routes.REVIEWS} component={Reviews} />
        </Switch>
      </div>
    );
  }
}

export default MovieDetailsPage;
