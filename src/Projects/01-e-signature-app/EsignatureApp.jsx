import { useState } from 'react'
import { Title } from '../../components'

const EsignatureApp = () => {
  const [date, setDate] = useState('')
  const [jina, setJina] = useState('Enter your signature')

  const handleName = (e) => {
    setJina(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const inputStyle = {
    border: 'none',
    borderBottom: '2px dotted',
    outline: 'none',
    padding: '4px 0',
  }

  document.body.style.background = '#eee'

  return (
    <div className='container m-auto text-center'>
      <Title title={jina} />
      <Title title={!date ? 'DOB' : date} classes={'subtitle'} />
      <p className='m-4'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, in
        voluptatum nobis quis, aliquid, accusantium maiores dolor iste optio
        nisi consequatur nihil quaerat consequuntur? Expedita quibusdam
        molestiae asperiores illum voluptatibus?
      </p>
      <footer
        className='d-flex'
        style={{
          justifyContent: 'space-around',
          position: 'relative',
          top: '10vh',
        }}
      >
        <input
          type='date'
          value={date}
          onChange={handleDate}
          style={inputStyle}
        />
        <input
          type='text'
          value={jina}
          name='jina'
          style={inputStyle}
          onChange={handleName}
        />
      </footer>
    </div>
  )
}

export default EsignatureApp
