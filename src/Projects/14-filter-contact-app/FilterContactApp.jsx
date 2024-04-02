import { useEffect, useRef, useState } from 'react'
import { Title } from '../../components'

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
    </div>
  )
}

export default FilterContactApp
