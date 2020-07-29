import React from 'react';
import './descriptionRow.scss';

const DescriptionRow = ({ element: { text, icon } }) => {
  return <li className="description-row">{text}</li>;
};

export default DescriptionRow;
