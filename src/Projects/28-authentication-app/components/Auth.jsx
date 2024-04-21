import React, { useContext } from 'react'
import { Alert, Button } from '../../../components'
import { AuthContext } from '../context/AuthContext'

const Auth = () => {
  const auth = useContext(AuthContext)

  return (
    <div>
      {auth.status === true ? (
        <Alert type={'success'} message={'Success'} />
      ) : null}
      {auth.status === true ? (
        <Button
          classes={'btn-block btn-danger'}
          text='Logout'
          btnType={'submit'}
          handleClick={auth.logout}
        />
      ) : auth.status === false ? (
        <Button
          classes={'btn-block btn-primary'}
          text='Try Again'
          btnType={'submit'}
          handleClick={auth.login}
        />
      ) : (
        <Button
          classes={'btn-block btn-success'}
          text='Login'
          btnType={'submit'}
          handleClick={auth.login}
        />
      )}
    </div>
  )
}

export default Auth
