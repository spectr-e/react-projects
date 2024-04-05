import React from 'react'

const Form = ({
  labelFor,
  labelText,
  inputType = 'text',
  placeholderText,
  inputName,
  onInput = null,
  onChange = null,
  values = '',
  onKeyUp = null,
  classes,
  readOnly = false,
  refer,
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
        value={values}
        onChange={onChange}
        onInput={onInput}
        onKeyUp={onKeyUp}
        className={classes}
        readOnly={readOnly}
        ref={refer}
      />
    </div>
  )
}

export default Form
