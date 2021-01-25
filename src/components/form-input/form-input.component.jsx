import React from 'react';
import './form-input.styles.scss';

export const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    // if there is a label render it, if not 'null'
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
