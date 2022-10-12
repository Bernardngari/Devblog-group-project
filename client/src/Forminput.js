import React from 'react'

const Forminput = (props) => {
    const {label, onChange, id, ...inputProps} = props
  return (
      <div>
          <label>{ label }</label>
          <input {...inputProps} onChange={onChange} />
    </div>
  )
}

export default Forminput