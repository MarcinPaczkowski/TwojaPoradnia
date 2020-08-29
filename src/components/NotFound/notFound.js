import React, { useEffect, useState } from 'react';
import './notFound.scss';
import { navigate } from 'gatsby';
import { FaRegSadTear } from 'react-icons/fa';

const NotFound = () => {
  const [timeCounter, setTimeCounter] = useState(5);

  useEffect(() => {
    const timerHandler = setTimeout(
      () => setTimeCounter(timeCounter - 1),
      1000
    );
    if (timeCounter <= 0) {
      clearTimeout(timerHandler);
      setTimeCounter(5);
      navigate('/');
    }

    return () => {
      if (timerHandler) clearTimeout(timerHandler);
    };
  }, [timeCounter]);

  return (
    <div className="notFound">
      <h1>
        Przykro nam, ale niestety nie znaleziono strony o podanym adresie.
      </h1>
      <FaRegSadTear />
      <p>{`Za ${timeCounter} sekund zostaniesz przekierowany na stronę główną`}</p>
    </div>
  );
};

export default NotFound;
