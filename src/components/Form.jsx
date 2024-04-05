import React from 'react'

const Form = ({
  labelFor,
  labelText,
  inputType = 'text',
  placeholderText,
  inputName,
}) => {
  const inputStyle = {
    border: '1px solid rgba(0,0,0,0.1)',
    padding: '8px 12px',
    fontSize: '12px',
    borderRadius: '4px',
    width: 360,
  }
  return (
    <div className='dsf flex-column'>
      <label htmlFor={labelFor} className='font-semibold font-sm '>
        {labelText}
      </label>
      <input
        type={inputType}
        placeholder={placeholderText}
        name={inputName}
        style={inputStyle}
      />
    </div>
  )
}

export default Form
