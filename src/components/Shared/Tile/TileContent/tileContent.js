import React, { useRef, forwardRef, useImperativeHandle } from 'react';

import './tileContent.scss';
import ButtonExternalLink from '../../ButtonExternalLink/buttonExternalLink';
import ButtonLink from '../../ButtonLink/buttonLink';
import parse from 'html-react-parser';

const TileContent = (props, ref) => {
  useImperativeHandle(ref, () => ({
    navigate() {
      buttonLinkRef.current.navigate();
    },
  }));

  const {
    title,
    description,
    link: { url, text, isInternal },
  } = props.tile;
  const buttonLinkRef = useRef();
  return (
    <div className="tile-content">
      <div className="tile-content__wrapper">
        <h2 className="tile-content__wrapper--title">{title}</h2>
        {parse(description)}
      </div>
      <div className="tile-content__link">
        {isInternal ? (
          <ButtonLink ref={buttonLinkRef} url={url}>
            {text}
          </ButtonLink>
        ) : (
          <ButtonExternalLink ref={buttonLinkRef} url={url}>
            {text}
          </ButtonExternalLink>
        )}
      </div>
    </div>
  );
};

export default forwardRef(TileContent);
