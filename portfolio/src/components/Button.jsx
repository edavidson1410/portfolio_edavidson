

import React from 'react'

function Button(props) {

    const {text, onClick, type} = props

  return (
    <button 
    type={type}
    onClick={onClick}
    className='rounded-md p-1 bg-secondary text-accentPink border-solid border-2 border-accentPink self-center focus:bg-primary'
    >{text}</button>
  )
}

export default Button
