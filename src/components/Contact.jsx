import React from 'react'

const Contact = ({
  data,
  width = 400,
  cardColor = 'card-danger',
  textColor,
}) => {
  return (
    <div
      className={`${cardColor} card bg-light m-auto`}
      style={{ width: width }}
    >
      <div className='card-header'>{data.first_name}</div>
      <div className='card-body text-left'>
        <h4 className='card-text'>
          <span className={`${textColor} font-semibold`}>Last Name : </span>
          {data.last_name}
        </h4>
        <p className='card-text'>
          <span className={`${textColor} font-semibold`}>Email : </span>
          {data.email}
        </p>
        <p className='card-text'>
          <span className={`${textColor} font-semibold`}>Phone : </span>
          {data.phone}
        </p>
        <p className='card-text'>
          <span className={`${textColor} font-semibold`}>Username : </span>
          {data.user_name}
        </p>
      </div>
    </div>
  )
}

export default Contact
