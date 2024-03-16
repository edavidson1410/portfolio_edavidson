import React from 'react';

function Button(props) {

    const { text, className, onClick, type } = props;

    const buttonClassNames = `text-xl rounded-md bg-secondary text-accentPink border-solid 
    border-2 border-accentPink self-center hover:bg-primary text-nowrap
    ${className}`;

    const buttonTransition = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300";

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
