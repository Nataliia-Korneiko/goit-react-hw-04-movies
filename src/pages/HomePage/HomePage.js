import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/movies-api';
import s from './home-page.module.css';

class HomePage extends Component {
  state = {
    trending: [],
  };

  componentDidMount() {
    this.getTrending();
  }

  getTrending = () => {
    API.getTrending().then(res => {
      this.setState({ trending: res.data.results });
    });
  };

  render() {
    const { trending } = this.state;

    return (
      <div className={s.trendingContainer}>
        <ul className={s.trendingList}>
          <p className={s.trendingTitle}>Trending today</p>
          {trending.map(el => (
            <li className={s.trendingLink} key={el.id}>
              <Link to={`/movies/${el.id}`}>{el.title || el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
