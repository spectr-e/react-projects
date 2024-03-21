import { Alert, Title } from '../../components'

const AlertsApp = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center'>
        <Title title={'Alerts App'} />
        <Title title={'Subtitle here...'} classes={'subtitle'} />
        <Alert type={'success'} message={'Successful Login'} />
        <Alert
          type={'info'}
          message={'Time Triggered'}
          delay={true}
          delayTime={6000}
        />
      </div>
    </div>
  )
}

export default AlertsApp
