import { Contacts } from '../../components'

const ContactList = ({ contacts }) => {
  // const [icon, firstName, lastName, phoneNo] = contacts
  const randomImg = () => {
    const type = [
      'male',
      'female',
      'human',
      'identicon',
      'lorelei',
      'bottts',
      'avataaars',
      'micah',
      'personas',
      'miniavs',
    ]
    return type[Math.floor(Math.random() * type.length)]
  }

  return (
    <ul>
      {contacts.map((contact, index) => (
        <Contacts
          key={index}
          icon={`https://api.dicebear.com/8.x/${randomImg()}/svg`}
          firstName={contact.first_name}
          lastName={contact.last_name}
          phoneNo={contact.phone}
        />
      ))}
    </ul>
  )
}

export default ContactList
