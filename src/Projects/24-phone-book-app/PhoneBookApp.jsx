import { useState } from 'react'
import { Title } from '../../components'
import ContactList from './ContactList'
import { contacts } from '../../data'

const PhoneBookApp = () => {
  const [showContacts, setShowContacts] = useState(true)
  const db = contacts

  return (
    <div className='container'>
      <Title title={'Phonebook App'} classes={'title text-center'} />
      <main className='bg-dark text-light p-1'>
        <div style={{ height: 600, overflow: 'auto' }}>
          <h2 className='subtitle text-center'>Display Contacts</h2>
          {showContacts && (
            <ContactList
              contacts={db.map((contact) => {
                return contact
              })}
            />
          )}
        </div>
      </main>
    </div>
  )
}

export default PhoneBookApp
