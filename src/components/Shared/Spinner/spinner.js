import React from 'react';
import './spinner.scss';
import { FaSpinner } from 'react-icons/fa';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__icon">
        <FaSpinner />
      </div>
    </div>
  );
};

export default Spinner;
