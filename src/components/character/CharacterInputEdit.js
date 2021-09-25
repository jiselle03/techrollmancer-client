import React from 'react';
import { Input } from '../styles/Form';

export const InputEditStats = props => {
  const { type, field, defaultValue, min, max, step } = props;

  const handleBlur = (event, field) => {
    return props.onHandleBlur(event, field);
  };

  return(
    <Input 
      onBlur={event => handleBlur(event, field)}
      type={type || "number"}
      field={field}
      name={field}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      className="stats"
    />
  );
};
