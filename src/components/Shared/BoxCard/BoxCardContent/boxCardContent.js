import React from 'react';
import './boxCardContent.scss';
import ButtonLink from '../../ButtonLink/buttonLink';
import parse from 'html-react-parser';

const BoxCardContent = ({ content: { title, content, actions } }) => {
  return (
    <div className="box-card-content">
      <h2 className="box-card-content__title">{title}</h2>
      <div className="box-card-content__content">{parse(content)}</div>
      <div className="box-card-content__buttons">
        {actions.map((a, i) => {
          return (
            <ButtonLink key={`${title}-${i}`} url={a.link}>
              {a.buttonText}
            </ButtonLink>
          );
        })}
      </div>
    </div>
  );
};

export default BoxCardContent;
