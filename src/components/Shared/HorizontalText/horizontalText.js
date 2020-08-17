import React from 'react';
import './horizontalText.scss';
import parse from 'html-react-parser';

const HorizontalText = ({ text, isHtml }) => {
  return (
    <div className="horizontalText">
      {isHtml ? parse(text) : `<p>${text}</p>`}
    </div>
  );
};

export default HorizontalText;
