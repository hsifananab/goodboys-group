import React, { Children } from 'react';

import './Button.scss';

const Button = ({ type, form, onClick, children }) => {
  return (
    <button className="button" type={type} form={form} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
