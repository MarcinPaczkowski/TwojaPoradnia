import React from 'react';
import './descriptionRow.scss';

const DescriptionRow = ({ element: { text, icon } }) => {
  return (
    <li className="description-row">
      <span className="description-row__icon"></span>
      <p className="description-row__text">{text}</p>
    </li>
  );
};

export default DescriptionRow;
