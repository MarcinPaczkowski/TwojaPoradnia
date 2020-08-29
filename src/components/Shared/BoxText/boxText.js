import React from 'react';
import './boxText.scss';
import parse from 'html-react-parser';

const BoxText = ({ text, isHtml }) => {
  return (
    <div className="box-text">
      <div className="box-text__text">
        {isHtml ? parse(text) : `<div>${text}</div>`}
      </div>
    </div>
  );
};

export default BoxText;
