import React from 'react'

const Contact = ({
  data,
  width = 300,
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
          <span className={`${textColor} font-bold`}>Last Name: </span>
          {data.last_name}
        </h4>
        <p className='card-text'>
          <span className={`${textColor} font-bold`}>Email: </span>
          {data.email}
        </p>
        <p className='card-text'>
          <span className={`${textColor} font-bold`}>Phone: </span>
          {data.phone}
        </p>
        <p className='card-text'>
          <span className={`${textColor} font-bold`}>Username: </span>
          {data.user_name}
        </p>
      </div>
    </div>
  )
}

export default Contact
