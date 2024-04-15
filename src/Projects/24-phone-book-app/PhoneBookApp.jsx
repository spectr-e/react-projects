import { useState } from 'react'
import { Title } from '../../components'
import ContactList from './ContactList'
import { contacts } from '../../data'
import SearchFilter from './SearchFilter'

const PhoneBookApp = () => {
  const [showContacts, setShowContacts] = useState(true)
  const db = contacts

  const toggleContacts = () => {
    showContacts ? setShowContacts(false) : setShowContacts(true)
  }

  return (
    <div className='container'>
      <Title title={'Phonebook App'} classes={'title text-center'} />
      <main className='bg-dark text-light p-1'>
        <SearchFilter handleToggle={toggleContacts} />

        <div style={{ height: 600, overflow: 'auto' }}>
          <h2 className='subtitle text-center'>Display Contacts</h2>
          {showContacts && <ContactList contacts={db} />}
        </div>
      </main>
    </div>
  )
}

export default PhoneBookApp
