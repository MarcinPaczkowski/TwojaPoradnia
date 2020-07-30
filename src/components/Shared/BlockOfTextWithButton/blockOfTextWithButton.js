import React from 'react';
import './blockOfTextWithButton.scss';
import ButtonLink from '../ButtonLink/buttonLink';
import BlockOfTextWithButtonContent from './BlockOfTextWithButtonContent/blockOfTextWithButtonContent';

const BlockOfTextWithButton = ({ content, link: { url, text } }) => {
  return (
    <div className="block-of-text-with-button">
      <BlockOfTextWithButtonContent content={content} />
      <div className="block-of-text-with-button__link">
        <ButtonLink url={url}>{text}</ButtonLink>
      </div>
    </div>
  );
};

export default BlockOfTextWithButton;
