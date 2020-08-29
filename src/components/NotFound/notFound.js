import React from 'react';
import './notFound.scss';
import { navigate } from 'gatsby';

const NotFound = () => {
  setTimeout(() => navigate('/'), 5000);
  return (
    <div className="notFound">
      <h1>
        Przykro nam, ale niestety nie znaleziono strony o podanym adresie.
      </h1>
      <p>Za moment zostaniesz przekierowany na stronę główną</p>
    </div>
  );
};

export default NotFound;
