import { Alert, Title } from '../../components'

const AlertsApp = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center'>
        <Title title={'Alerts App'} />
        <Title title={'Subtitle here...'} classes={'subtitle'} />
        <Alert />
      </div>
    </div>
  )
}

export default AlertsApp
