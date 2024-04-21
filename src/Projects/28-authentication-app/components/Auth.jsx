import { Alert, Button } from '../../../components'

const Auth = () => {
  return (
    <div>
      <Alert type={'success'} message={'Success'} />
      <Button
        classes={'btn-block btn-success'}
        text='Login'
        btnType={'submit'}
      />
      <Button
        classes={'btn-block btn-danger'}
        text='Logout'
        btnType={'submit'}
      />
      <Button
        classes={'btn-block btn-primary'}
        text='Try Again'
        btnType={'submit'}
      />
    </div>
  )
}

export default Auth
