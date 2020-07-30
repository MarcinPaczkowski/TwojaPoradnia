import React from 'react';
import './boxCardContent.scss';
import ButtonLink from '../../ButtonLink/buttonLink';
import { v4 as uuid } from 'uuid';
import parse from 'html-react-parser';

const BoxCardContent = ({ content: { title, content, actions } }) => {
  return (
    <div className="box-card-content">
      <h2 className="box-card-content__title">{title}</h2>
      <div className="box-card-content__content">{parse(content)}</div>
      <div className="box-card-content__buttons">
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

export default BoxCardContent;
