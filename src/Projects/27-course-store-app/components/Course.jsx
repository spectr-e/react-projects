import React from 'react'
import { Button } from '../../../components'

// import currency context
import { CurrencyContext } from '../context'

const Course = ({ course }) => {
  const { title, img, price } = course
  const currency = React.useContext(CurrencyContext)
  const contextPrice = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: currency.code,
  }).format(price * currency.conversionRate)

  return (
    <li className={`card mb-2`} style={{ width: 240 }}>
      <div className='card-header'>{title}</div>
      <img src={img} alt='course' style={{ height: '100%' }} />
      <p className='card-body'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam vero
        voluptas non ad magnam, atque, a maiores esse sit repellat hic quisquam
        officia excepturi maxime dolor illum? Maiores, reprehenderit pariatur!
      </p>
      <div
        className='card-footer'
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <h4>{contextPrice}</h4>
        <Button classes={'btn-success'} text='Buy' />
      </div>
    </li>
  )
}

export default Course
