import React from 'react';
import './stickyLabel.scss';
import stickyLabelTypes from './stickyLabelTypes';
import { FaTimesCircle } from 'react-icons/fa';

const StickyLabel = ({ type, message, close }) => {
  const closeHandler = () => {
    close();
  };

  const getStickyLabelClass = type => {
    const baseClass = 'stickyLabel';
    switch (type) {
      case stickyLabelTypes.ERROR:
        return `${baseClass} stickyLabel__error`;
      case stickyLabelTypes.SUCCESS:
        return `${baseClass} stickyLabel__success`;
      case stickyLabelTypes.INFORMATION:
        return `${baseClass} stickyLabel__info`;
      default:
        return `${baseClass} stickyLabel__info`;
    }
  };

  const stickyLabelClasses = getStickyLabelClass(type);

  return (
    <div className={stickyLabelClasses}>
      <div className="stickyLabel__content">
        <span className="stickyLabel__content--message">{message}</span>
        <button className="stickyLabel__content--close" onClick={closeHandler}>
          <FaTimesCircle />
        </button>
      </div>
    </div>
  );
};

export default StickyLabel;
