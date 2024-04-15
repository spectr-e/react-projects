import styled from 'styled-components'
import { FaUserAlt, FaPhone } from 'react-icons/fa'
const ContactStyle = styled.li``
const Contacts = ({ icon, firstName, lastName, phoneNo }) => {
  return (
    <ContactStyle>
      <div>
        {!icon ? (
          <FaUserAlt className='text-info' />
        ) : (
          <img src={icon} alt='icon' />
        )}
      </div>
      <div>{!firstName ? 'John' : firstName}</div>
      <div>{!lastName ? 'Doe' : lastName}</div>
      {!phoneNo ? (
        '000-000'
      ) : (
        <a href={`tel: ${phoneNo}`} className='text-info'>
          {phoneNo}
        </a>
      )}
    </ContactStyle>
  )
}

export default Contacts
