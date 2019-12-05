import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const ativeLink = {
  color: 'palevioletred',
};

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink to={routes.HOME} exact activeStyle={ativeLink}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={routes.MOVIES} activeStyle={ativeLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
