import React from 'react'
import { ProgressBar, Title } from '../../components'
const ProgressTrackerApp = () => {
  return (
    <div className='container'>
      <Title title={'Progress Tracker App'} classes={'title text-center'} />
      <ProgressBar />
    </div>
  )
}

export default ProgressTrackerApp
