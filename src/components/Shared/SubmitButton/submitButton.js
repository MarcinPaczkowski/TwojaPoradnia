import React from 'react';
import './submitButton.scss';

const SubmitButton = ({ text }) => (
  <input className="submit-button" type="submit" value={text} />
);

export default SubmitButton;
