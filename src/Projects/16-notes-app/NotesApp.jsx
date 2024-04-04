import { Button, Notes } from '../../components'

const NotesApp = () => {
  return (
    <div className='container'>
      <Button classes={'btn-success'} text='+ New Note' />

      <div
        className='container container-sm d-flex gap-24'
        style={{ flexWrap: 'wrap' }}
      >
        <Notes />
      </div>
    </div>
  )
}

export default NotesApp
