import { useEffect, useRef, useState } from 'react'
import { Contact, Title } from '../../components'
import { data } from '../../data'
const FilterContactApp = () => {
  const inputRef = useRef(null)
  const [searchVal, setSearchVal] = useState('')

  const handleSearch = (e) => {
    setSearchVal(e.target.value)
  }

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
        onChange={handleSearch}
        ref={inputRef}
        style={{
          padding: '4px 8px',
        }}
      />

      {/* Contacts Section */}
      <section
        className='d-flex m-auto gap-16'
        style={{
          maxWidth: 1600,
        }}
      >
        {data.map((contact) => (
          <Contact key={contact.id} data={contact} />
        ))}
      </section>
    </div>
  )
}

export default FilterContactApp
