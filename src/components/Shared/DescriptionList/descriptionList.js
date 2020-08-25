import React from 'react';
import './descriptionList.scss';
import DescriptionRow from './DescriptionRow/descriptionRow';

const DescriptionList = ({ elements }) => {
  return (
    <ul className="description-list">
      {elements?.map((e, i) => (
        <DescriptionRow element={e} isHtml key={i} />
      ))}
    </ul>
  );
};

export default DescriptionList;
