import React from 'react'

function Button(props) {

    const { text, className, onClick } = props

    const buttonClassNames = `rounded-md bg-secondary text-accentPink border-solid border-2 border-accentPink self-center focus:bg-primary ${className}`

  return (
    <button
    className={buttonClassNames}
    onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
