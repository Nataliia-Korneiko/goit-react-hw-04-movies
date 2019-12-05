import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as API from '../../services/movies-api';

class Reviews extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({}.isRequired),
    }).isRequired,
  };

  state = {
    reviews: [],
  };

  componentDidMount() {
    this.getMovieReviews();
  }

  getMovieReviews = () => {
    const { match } = this.props;
    const { movieId } = match.params;

    API.getMovieReviews(movieId).then(res => {
      // console.log('res', res);
      this.setState({ reviews: res.data.results });
    });
  };

  render() {
    const { reviews } = this.state;

    return (
      <>
        {reviews.length === 0 && (
          <p>We don&#39;t have any reviews for this movie.</p>
        )}
        {reviews.length !== 0 && (
          <ul>
            {reviews.map(el => (
              <li key={el.id}>
                <p>Author: {el.author}</p>
                <p>{el.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;
