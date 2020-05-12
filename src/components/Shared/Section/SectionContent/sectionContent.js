import React from 'react';
import './sectionContent.scss';
import ButtonLink from '../../ButtonLink/buttonLink';

const SectionContent = ({
  content: { header, title, paragraphs, buttons },
}) => {
  return (
    <div className="section-content">
      <h2 className="section-content__header">{header}</h2>
      <h3 className="section-content__title">{title}</h3>
      {paragraphs.map((p, i) => {
        return (
          <p className="section-content__text" key={i}>
            {p}
          </p>
        );
      })}
      <div className="section-content__buttons">
        {buttons.map((b, i) => {
          return (
            <ButtonLink key={i} url={b.url}>
              {b.text}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
};

export default SectionContent;
