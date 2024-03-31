import { Button, Popup, Title } from '../../components'

const MagicPopupApp = () => {
  return (
    <div className='text-center'>
      <Title title={'Magic Popup App'} />
      <Title
        title={'Click for popup, or wait for 3 sec'}
        classes={'subtitle'}
      />
      <Button />
      <Popup type={'alert-info'} />
    </div>
  )
}

export default MagicPopupApp
