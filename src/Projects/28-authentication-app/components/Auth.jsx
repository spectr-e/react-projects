import { useContext } from 'react'
import { Alert, Button } from '../../../components'
import { AuthContext } from '../context/AuthContext'

const Auth = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
      {auth.status === true ? (
        <Alert type={'success'} message={'Success'} />
      ) : null}
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
