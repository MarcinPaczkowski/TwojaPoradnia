import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.scss';
import SubmitButton from '../SubmitButton/submitButton';

const Form = ({ submitted, items, submitButtonText }) => {
  const { register, handleSubmit, errors, reset } = useForm();

  const submitHandler = data => {
    submitted(data);
    reset();
  };

  const getElements = items => {
    return items.map((item, i) => {
      const error = errors[item.name] && (
        <span className="form__row--error">
          {item.errorMessages[errors[item.name].type]}
        </span>
      );
      switch (item.tag) {
        case 'input':
          return (
            <div className="form__row" key={`${i}-row`}>
              <input
                className="form__row--item"
                type={item.type}
                name={item.name}
                placeholder={item.placeholder}
                ref={register(item.validators)}
              />
              {error}
            </div>
          );
        case 'textarea':
          return (
            <div className="form__row" key={`${i}-row`}>
              <textarea
                className="form__row--item form__row--text"
                name={item.name}
                placeholder={item.placeholder}
                ref={register(item.validators)}
              ></textarea>
              {error}
            </div>
          );
        default:
          return null;
      }
    });
  };

  const elements = getElements(items);

  return (
    <form className="form" onSubmit={handleSubmit(submitHandler)} noValidate>
      {elements}
      <SubmitButton>{submitButtonText}</SubmitButton>
    </form>
  );
};

export default Form;
