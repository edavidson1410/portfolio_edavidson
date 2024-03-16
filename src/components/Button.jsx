import React from 'react';

function Button(props) {

    const { text, className, onClick, type } = props;

    const buttonClassNames = `rounded-md bg-secondary text-accentPink border-solid 
    border-2 border-accentPink self-center hover:bg-primary 
    ${className}`;

  return (
    <button
    type={type}
    className={buttonClassNames}
    onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
