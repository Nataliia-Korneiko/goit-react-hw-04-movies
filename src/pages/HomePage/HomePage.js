import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/movies-api';

class HomePage extends Component {
  state = {
    trending: [],
  };

  componentDidMount() {
    this.getTrending();
  }

  getTrending = () => {
    API.getTrending().then(res => {
      // console.log('res', res);
      this.setState({ trending: res.data.results });
    });
  };

  render() {
    const { trending } = this.state;

    return (
      <div>
        <ul>
          <p>Trending today</p>
          {trending.map(el => (
            <li key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title || el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
