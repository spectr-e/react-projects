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
    <div>
      <Contacts
        icon={`https://api.dicebear.com/8.x/${randomImg()}/svg`}
        firstName={''}
        lastName={''}
        phoneNo={''}
      />
    </div>
  )
}

export default ContactList
