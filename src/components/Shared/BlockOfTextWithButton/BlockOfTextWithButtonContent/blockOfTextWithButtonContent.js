import React from 'react';
import './blockOfTextWithButtonContent.scss';
import parse from 'html-react-parser';

const BlockOfTextWithButtonContent = ({ content }) => {
  return (
    <div className="block-of-text-with-button-content">{parse(content)}</div>
  );
};

export default BlockOfTextWithButtonContent;
