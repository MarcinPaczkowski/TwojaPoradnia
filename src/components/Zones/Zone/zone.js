import React from 'react';
import './zone.scss';
import ButtonLink from '../../Shared/ButtonLink/buttonLink';

const Zone = ({ zone: { imageUrl, imageAlt, name, goToUrl } }) => (
  <div className="zone">
    <img className="zone__image" src={imageUrl} alt={imageAlt} />
    <p className="zone__name">{name}</p>
    <ButtonLink url={goToUrl}>Wchodzę</ButtonLink>
  </div>
);

export default Zone;
