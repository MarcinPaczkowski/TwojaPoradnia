import React from 'react';
import './sectionContent.scss';
import ButtonLink from '../../ButtonLink/buttonLink';
import { v4 as uuid } from 'uuid';
import parse from 'html-react-parser';

const SectionContent = ({ content: { title, content, actions } }) => {
  return (
    <div className="section-content">
      <h2 className="section-content__title">{title}</h2>
      <div className="section-content__content">{parse(content)}</div>
      <div className="section-content__buttons">
        {actions.map(a => {
          return (
            <ButtonLink key={uuid()} url={a.link}>
              {a.buttonText}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
};

export default SectionContent;
