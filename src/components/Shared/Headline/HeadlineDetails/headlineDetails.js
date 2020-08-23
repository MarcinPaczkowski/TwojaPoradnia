import React from 'react';
import './headlineDetails.scss';

const HeadlineDetails = ({ title, publishDate, author }) => {
  return (
    <div className="headline-details">
      <h1 className="headline-details__title">{title}</h1>
      <div className="headline-details__publication">
        <p className="headline-details__row headline-details__row--bold">
          {author}
        </p>
        <p className="headline-details__row">{publishDate}</p>
      </div>
    </div>
  );
};

export default HeadlineDetails;
