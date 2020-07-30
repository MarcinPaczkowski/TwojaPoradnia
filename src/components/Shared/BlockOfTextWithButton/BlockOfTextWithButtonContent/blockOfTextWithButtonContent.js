import React from 'react';
import './blockOfTextWithButtonContent.scss';
import parse from 'html-react-parser';
import { v4 as uuid } from 'uuid';

const BlockOfTextWithButtonContent = ({ content }) => {
  return (
    <div className="block-of-text-with-button-content">
      {content.map(item => {
        {
          if (item.includes('<p>'))
            return parse(item.replace('<p>', `<p key=${uuid()}>`));
          if (item.includes('<h2>'))
            return parse(item.replace('<h2>', `<h2 key=${uuid()}>`));
          if (item.includes('<h3>'))
            return parse(item.replace('<h3>', `<h3 key=${uuid()}>`));
          return null;
        }
      })}
    </div>
  );
};

export default BlockOfTextWithButtonContent;
