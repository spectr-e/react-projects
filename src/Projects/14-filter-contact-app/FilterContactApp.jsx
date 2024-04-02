import { useEffect, useRef, useState } from 'react'
import { Contact, Title } from '../../components'
import { data } from '../../data'
const FilterContactApp = () => {
  const inputRef = useRef(null)
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className='container text-center'>
      <Title title={'Contacts'} />

      {/* Search Section */}
      <input
        type='text'
        className='mb-2 text-center font-md'
        placeholder='Search by name'
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        ref={inputRef}
        style={{
          padding: '4px 8px',
        }}
      />

      {/* Contacts Section */}
      <section
        className='d-flex m-auto'
        style={{
          maxWidth: '1600px',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {data
          .filter((contact) => {
            if (!contact) {
              return contact
            } else if (
              contact.first_name
                .toLocaleLowerCase()
                .includes(searchVal.toLocaleLowerCase())
            ) {
              return contact
            }
          })
          .map((contact) => (
            <Contact key={contact.id} data={contact} textColor={'text-dark'} />
          ))}
      </section>
    </div>
  )
}

export default FilterContactApp
