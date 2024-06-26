import { useEffect, useRef, useState } from 'react'
import { ProgressBar, Title } from '../../components'

const ProgressTrackerApp = () => {
  const uiInput = useRef(null)
  const uxInput = useRef(null)
  const dataInput = useRef(null)

  useEffect(() => {
    uiInput.current.focus()
    setInterval(() => {
      setCompleted(Math.floor(Math.random() * 100) + 1)
    }, 2000)
  }, [])

  const [completed, setCompleted] = useState(0)
  const [status, setStatus] = useState({
    ui: 33,
    ux: 60,
    data: 88,
  })

  const projectData = [
    {
      bgColor: '#7633f9',
      completed: status.ui,
    },
    {
      bgColor: '#28a745',
      completed: status.ux,
    },
    {
      bgColor: '#dc3545',
      completed: status.data,
    },
  ]

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'UI':
        setStatus({ ...status, ui: e.target.value })
        break
      case 'UX':
        setStatus({ ...status, ux: e.target.value })
        break
      case 'DATA':
        setStatus({ ...status, data: e.target.value })

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
              value={status.ui}
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
              value={status.ux}
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
              value={status.data}
              onChange={handleChange}
              ref={dataInput}
            />
          </div>
        </div>
      </div>
      {projectData.map((data, index) => (
        <ProgressBar
          key={index}
          bgColor={data.bgColor}
          completed={data.completed}
        />
      ))}
      <ProgressBar
        bgColor={completed > 50 ? '#28a745' : '#7633f9'}
        completed={completed}
      />
    </div>
  )
}

export default ProgressTrackerApp
