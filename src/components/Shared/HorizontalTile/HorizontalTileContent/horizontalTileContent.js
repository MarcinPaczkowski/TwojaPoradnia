import React from 'react';
import './horizontalTileContent.scss';
import ButtonLink from '../../ButtonLink/buttonLink';

const HorizontalTileContent = () => {
  return (
    <div className="horizontalTileContent">
      <h2 className="horizontalTileContent__title">Zajęcia1</h2>
      <p className="horizontalTileContent__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid maxime
        iusto ipsa autem aut labore nesciunt obcaecati nostrum dignissimos,
        fugiat nobis velit temporibus consectetur voluptas voluptates cum
        mollitia architecto? Error.
      </p>
      <div className="horizontalTileContent__button">
        <ButtonLink url="/o-mnie">Więcej</ButtonLink>
      </div>
    </div>
  );
};

export default HorizontalTileContent;
