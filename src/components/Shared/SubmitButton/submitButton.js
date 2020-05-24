import React from 'react';
import './submitButton.scss';

const SubmitButton = ({ isDisabled, children }) => (
  <button className="submit-button" type="submit" disabled={isDisabled}>
    {children}
  </button>
);

export default SubmitButton;
