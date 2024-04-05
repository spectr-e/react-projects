import React from 'react'

const Form = ({ labelFor, labelText, inputType, placeholderText }) => {
  return (
    <>
      <label htmlFor='firstName'>First Name</label>
      <input type='text' placeholder='Enter your first name' />
    </>
  )
}

export default Form
