import { useState } from 'react'
import { Title } from '../../components'
import ContactList from './ContactList'
import { contacts } from '../../data'
import SearchFilter from './SearchFilter'

const PhoneBookApp = () => {
  const [sortAZ, setSortAZ] = useState(true)
  const [showContacts, setShowContacts] = useState(false)
  const db = contacts

  const toggleContacts = () => {
    showContacts ? setShowContacts(false) : setShowContacts(true)
  }

  const toggleSortAZ = () => {
    sortAZ ? setSortAZ(false) : setSortAZ(true)
  }

  return (
    <div className='container'>
      <Title title={'Phonebook App'} classes={'title text-center'} />
      <main className='bg-dark text-light p-1'>
        <SearchFilter
          handleToggle={toggleContacts}
          handleToggleSortAZ={toggleSortAZ}
        />

        <div style={{ height: 600, overflow: 'auto' }}>
          <h2 className='subtitle text-center'>Contacts</h2>
          {showContacts && (
            <ContactList
              contacts={
                sortAZ
                  ? db.sort((a, b) => a.first_name.localeCompare(b.first_name))
                  : db.sort((a, b) => b.first_name.localeCompare(a.first_name))
              }
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default PhoneBookApp
