import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import './buttonExternalLink.scss';

const ButtonExternalLink = (props, ref) => {
  useImperativeHandle(ref, () => ({
    navigate() {
      aRef.current.click();
    },
  }));

  const aRef = useRef();
  return (
    <a
      ref={aRef}
      className="button-external-link"
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  );
};

export default forwardRef(ButtonExternalLink);
