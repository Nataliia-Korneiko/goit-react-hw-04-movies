import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './search-bar.module.css';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const { value } = this.state;
    onSubmit(value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={s.searchBarForm} onSubmit={this.handleSubmit}>
        <input
          className={s.searchBarInput}
          value={value}
          onChange={this.handleChange}
          type="text"
        />
        <button className={s.searchBarButton} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
