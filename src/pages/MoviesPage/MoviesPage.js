import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import * as API from '../../services/movies-api';

class MoviesPage extends Component {
  static propTypes = {
    history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
    location: PropTypes.shape({ search: PropTypes.string.isRequired })
      .isRequired,
  };

  state = {
    movies: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('query');
    // if(location)

    if (!currentSearch) {
      return;
    }

    this.searchMovies(currentSearch);
  }

  componentDidUpdate(prevProps) {
    const prevSearch = new URLSearchParams(prevProps.location.search).get(
      'query',
    );
    const { location } = this.props;
    const currentSearch = new URLSearchParams(location.search).get('query');

    if (prevSearch === currentSearch) {
      return;
    }

    this.searchMovies(currentSearch);
  }

  searchMovies = query => {
    API.searchMovies(query).then(res =>
      this.setState({ movies: res.data.results }),
    );
  };

  onSearchSubmit = query => {
    const { history, location } = this.props;
    history.push({
      ...location,
      search: `?query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ul>
          {movies.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default MoviesPage;
