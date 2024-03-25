import React from 'react';

function Button(props) {

    const { text, className, onClick, type } = props;

    const buttonClassNames = `relative rounded-md bg-secondary text-accentPink border-solid 
    border-2 border-accentPink self-center hover:bg-primary text-nowrap
    ${className}`;

    const buttonTransition = "transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl";

  return (
    <button
    type={type}
    className={`${buttonClassNames} ${buttonTransition}`}
    onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
