import React, { useState } from 'react'
import { ProgressBar, Title } from '../../components'

const ProgressTrackerApp = () => {
  const [ui, setUi] = useState('')
  const [ux, setUx] = useState('')
  const [data, setData] = useState('')

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'UI':
        setUi(e.target.value)
        break
      case 'UX':
        setUx(e.target.value)
        break
      case 'DATA':
        setData(e.target.value)
        break
    }
  }

  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid black',
    outline: 'none',
    fontSize: '20px',
    width: '120px',
    textAlign: 'center',
    fontWeight: 600,
  }
  const labelStyle = {
    fontWeight: 600,
    fontSize: '20px',
  }
  return (
    <div className='container'>
      <Title title={'Progress Tracker App'} classes={'title text-center'} />
      <Title title={'Project Status'} classes={'text-center'} />

      <div className='dsf flex-column aic'>
        <div className=' dsf flex-column gap-16'>
          {/* Project One */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            <label htmlFor='ui' style={labelStyle}>
              UI
            </label>
            <input
              type='text'
              name='UI'
              style={inputStyle}
              value={ui}
              onChange={handleChange}
            />
          </div>

          {/* Project Two */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <label htmlFor='UX' style={labelStyle}>
              UX
            </label>
            <input
              type='text'
              name='UX'
              style={inputStyle}
              value={ux}
              onChange={handleChange}
            />
          </div>

          {/* Project Three */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <label htmlFor='DATA' style={labelStyle}>
              DATA
            </label>
            <input
              type='text'
              name='DATA'
              style={inputStyle}
              value={data}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
  )
}

export default ProgressTrackerApp
