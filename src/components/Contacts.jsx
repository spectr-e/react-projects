import styled from 'styled-components'
import { FaUserAlt, FaPhone } from 'react-icons/fa'

const ContactStyle = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  max-width: 800px;
  margin: auto;
  padding: 4px 8px;
  border-bottom: 1px solid #666;
  &:hover {
    cursor: pointer;
    background-color: #666;
  }
  img {
    height: 48px;
    border-radius: 50%;
  }
`

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
