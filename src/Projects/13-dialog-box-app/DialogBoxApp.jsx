import { Button } from '../../components'

const DialogBoxApp = ({ width = 360 }) => {
  return (
    <div className='card bg-light m-auto mt-4' style={{ width: width }}>
      <div className='card-body'>
        <div
          className='d-grid aic jcc'
          style={{ gridTemplateColumns: '2fr 1fr', alignSelf: 'center' }}
        >
          <section>
            <h2 className='card-title'>Title</h2>
            <h3 className='card-text'>Text</h3>
          </section>
          <div>Icon</div>
        </div>
      </div>

      <div className='d-flex mb-2 px-1 text-end'>
        <Button text='Cancel' classes={'btn-light'} />
        <Button text='Subscribe' classes={'btn-danger'} />
        <Button text='Unsubscribe' classes={'btn-danger btn-block'} />
      </div>
    </div>
  )
}

export default DialogBoxApp
