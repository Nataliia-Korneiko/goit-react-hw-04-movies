import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const NotFoundPage = () => {
  return (
    <div>
      <h2>Sorry, the page you requested was not found.</h2>
      <p>
        This is our homepage: <NavLink to={routes.HOME}>Click me!</NavLink>
      </p>
    </div>
  );
};

export default NotFoundPage;
