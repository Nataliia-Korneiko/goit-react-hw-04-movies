import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../services/movies-api';

class Cast extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}.isRequired),
    }).isRequired,
  };

  state = {
    cast: [],
  };

  componentDidMount() {
    this.getMovieCredits();
  }

  getMovieCredits = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.getMovieCredits(movieId).then(res => {
      // console.log('res', res);
      this.setState({ cast: res.data.cast });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul>
          {cast.map(el => (
            <li key={el.id}>
              <img
                alt={el.name}
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              />
              <p>{el.name}</p>
              <p>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
