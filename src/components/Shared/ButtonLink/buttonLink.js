import React, { forwardRef, useImperativeHandle } from 'react';
import { navigate } from 'gatsby';
import './buttonLink.scss';

const ButtonLink = (props, ref) => {
  useImperativeHandle(ref, () => ({
    navigate() {
      navigate(props.url);
    },
  }));
  return (
    <a className="button-link" href={props.url}>
      {props.children}
    </a>
  );
};

export default forwardRef(ButtonLink);
