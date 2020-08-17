import React from 'react';
import './descriptionList.scss';
import { v4 as uuid } from 'uuid';
import DescriptionRow from './DescriptionRow/descriptionRow';

const DescriptionList = ({ elements }) => {
  return (
    <ul className="description-list">
      {elements.map(e => (
        <DescriptionRow element={e} isHtml key={uuid()} />
      ))}
    </ul>
  );
};

export default DescriptionList;
