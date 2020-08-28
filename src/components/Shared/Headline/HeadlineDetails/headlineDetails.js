import React from 'react';
import './headlineDetails.scss';
import moment from 'moment';

const HeadlineDetails = ({ title, publishDate, author }) => {
  const formattedDate = moment(publishDate)
    .utc()
    .format('DD.MM.YYYY');

  return (
    <div className="headline-details">
      <h1 className="headline-details__title">{title}</h1>
      <div className="headline-details__publication">
        <p className="headline-details__row headline-details__row--bold">
          {author}
        </p>
        <p className="headline-details__row">{formattedDate}</p>
      </div>
    </div>
  );
};

export default HeadlineDetails;
