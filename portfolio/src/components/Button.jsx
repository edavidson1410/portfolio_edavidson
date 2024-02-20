

import React from 'react'

function Button(props) {

    const {text, onClick} = props

  return (
    <button 
    onClick={onClick}
    className='rounded-md p-1 bg-secondary text-accentPink border-solid border-2 border-accentPink self-center hover:bg-primary'
    >{text}</button>
  )
}

export default Button
