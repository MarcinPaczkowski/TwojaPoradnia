import React from 'react';
import './lecture.scss';
import parse from 'html-react-parser';

const Lecture = ({
  lecture: { title, address, formattedEventDate, description },
}) => {
  return (
    <div className="lecture">
      <h2 className="lecture__title">{title}</h2>
      <div className="lecture__description">{parse(description)}</div>
      <div className="lecture__details">
        <p>
          Adres: <strong>{address}</strong>
        </p>
        <p>
          Data: <strong>{formattedEventDate}</strong>
        </p>
      </div>
    </div>
  );
};

export default Lecture;
