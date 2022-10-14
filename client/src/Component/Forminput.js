import React, { useState } from 'react'

const Forminput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false) 

  const handleFocus = (e) => {
    setFocused(true)
  }
  return (
      <div className='input'>
          <label>{ label }</label>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={() => inputProps.name === "email" && setFocused(true)} focused={ focused.toString() } />
      <span>{ errorMessage }</span>
    </div>
  )
}

export default Forminput