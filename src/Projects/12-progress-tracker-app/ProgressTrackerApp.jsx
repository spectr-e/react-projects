import React from 'react'
import { ProgressBar, Title } from '../../components'
const ProgressTrackerApp = () => {
  return (
    <div className='container'>
      <Title title={'Progress Tracker App'} classes={'title text-center'} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          // justifyContent: 'center',
        }}
      >
        <div className=''>
          <div style={{ display: 'flex', gap: 8 }}>
            <label htmlFor='ui'>UI</label>
            <input type='text' name='UI' />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <label htmlFor='UX'>UX</label>
            <input type='text' name='UX' />
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <label htmlFor='data'>Data</label>
            <input type='text' name='data' />
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
  )
}

export default ProgressTrackerApp
