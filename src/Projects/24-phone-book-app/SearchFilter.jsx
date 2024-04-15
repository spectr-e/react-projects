import { FaAddressBook, FaArrowsAltV } from 'react-icons/fa'
import { Button } from '../../components'

const SearchFilter = ({ handleToggle, handleToggleSortAZ, handleSearch }) => {
  return (
    <section className='text-center'>
      <Button
        classes={'btn-dark'}
        text={''}
        icon={<FaAddressBook />}
        handleClick={handleToggle}
      />
      <input
        type='text'
        placeholder='Search by first name'
        className='mb-2 mx-1'
        style={{ padding: '4px 8px' }}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Button
        classes={'btn-dark'}
        text={''}
        icon={<FaArrowsAltV />}
        handleClick={handleToggleSortAZ}
      />
    </section>
  )
}

export default SearchFilter
