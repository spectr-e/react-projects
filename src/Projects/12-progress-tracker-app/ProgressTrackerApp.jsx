import React, { useEffect, useRef, useState } from 'react'
import { ProgressBar, Title } from '../../components'

const ProgressTrackerApp = () => {
  const uiInput = useRef(null)
  const uxInput = useRef(null)
  const dataInput = useRef(null)

  useEffect(() => {
    uiInput.current.focus()
  }, [])

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
    borderBottom: '1px dotted black',
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
      <Title title={'Project Status'} classes={'subtitle text-center'} />

      <div className='dsf flex-column aic'>
        <div className=' dsf flex-column gap-16'>
          {/* Project One */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            <label htmlFor='ui' style={labelStyle}>
              UI status :
            </label>
            <input
              type='number'
              name='UI'
              style={inputStyle}
              value={ui}
              onChange={handleChange}
              ref={uiInput}
            />
          </div>

          {/* Project Two */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
            <label htmlFor='UX' style={labelStyle}>
              UX status :
            </label>
            <input
              type='number'
              name='UX'
              style={inputStyle}
              value={ux}
              onChange={handleChange}
              ref={uxInput}
            />
          </div>

          {/* Project Three */}
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <label htmlFor='DATA' style={labelStyle}>
              DATA status :
            </label>
            <input
              type='number'
              name='DATA'
              style={inputStyle}
              value={data}
              onChange={handleChange}
              ref={dataInput}
            />
          </div>
        </div>
      </div>
      <ProgressBar />
    </div>
  )
}

export default ProgressTrackerApp
