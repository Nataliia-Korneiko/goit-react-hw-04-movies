import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import s from './navigation.module.css';

const ativeLink = {
  color: 'palevioletred',
};

const Navigation = () => {
  return (
    <ul className={s.navigationList}>
      <li>
        <NavLink
          to={routes.HOME}
          exact
          activeStyle={ativeLink}
          className={s.navigationLink}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={routes.MOVIES}
          activeStyle={ativeLink}
          className={s.navigationLink}
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
