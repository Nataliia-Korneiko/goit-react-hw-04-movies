import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../services/movies-api';
import s from './cast.module.css';

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
      this.setState({ cast: res.data.cast });
    });
  };

  render() {
    const { cast } = this.state;
    return (
      <>
        <ul className={s.castList}>
          {cast.map(el => (
            <li className={s.castItem} key={el.id}>
              <img
                className={s.castImg}
                alt={el.name}
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              />
              <p className={s.castName}>Name: {el.name}</p>
              <p className={s.castCharacter}>Character: {el.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Cast;
