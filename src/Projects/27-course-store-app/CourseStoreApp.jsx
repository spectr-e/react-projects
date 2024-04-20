import { useState } from 'react'
import { Button, Title } from '../../components'
import Courses from './components/Courses'

// Importing the Database
import { CourseDB, CurrenciesDB } from './db'

// Importing currency context
import { CurrencyContext } from './context'

document.body.style.backgroundColor = '#282c34'
document.body.style.color = '#fff'

const CourseStoreApp = () => {
  const [currency, setCurrency] = useState(CurrenciesDB.KES)

  // Event handlers
  // Change Currency
  const changeCurrency = (cur) => {
    setCurrency(cur)
  }

  return (
    <CurrencyContext.Provider value={currency}>
      <div className='container p-1'>
        {/* TODO: Add a Change Currency component here */}
        <h4 className='font-medium mb-1'>Change Currency : </h4>
        <div className='dsf'>
          {Object.values(CurrenciesDB).map((cur, index) => (
            <Button
              key={index}
              classes={'btn-light btn-sm'}
              text={cur.code}
              handleClick={() => changeCurrency(cur)}
            />
          ))}
        </div>

        <Title title={'Course Store'} classes={'title text-center'} />
        <Title
          title={'Become a Web Developer'}
          classes={'subtitle text-center'}
        />
        <p className='mx-2 text-center'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde at
          molestias repellat totam ipsam, dicta atque possimus eum eligendi
          dolore beatae mollitia voluptatum quibusdam non nemo inventore
          voluptas odit quia.
        </p>

        {/* TODO: Add course cards here */}
        <Courses courses={CourseDB} />
      </div>
    </CurrencyContext.Provider>
  )
}

export default CourseStoreApp
