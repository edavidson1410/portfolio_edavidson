

import React from 'react'

function Button(props) {

    const {text, onClick} = props

  return (
    <button 
    onClick={onClick}
    className='border rounded-md p-2 bg-secondary'
    >{text}</button>
  )
}

export default Button
