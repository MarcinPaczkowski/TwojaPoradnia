import React from 'react';
import './quotation.scss';
import parse from 'html-react-parser';

const Quotation = ({ children }) => {
  return <div className="quotation">{parse(children)}</div>;
};

export default Quotation;
