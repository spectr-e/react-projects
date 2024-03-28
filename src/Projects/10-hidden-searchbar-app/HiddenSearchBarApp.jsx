import { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Title } from '../../components'

const HiddenSearchBarApp = () => {
  const [uiProp, setUiProp] = useState({
    bg: 'purple',
    shadow: '',
    transition: 'all 0.3s ease',
    opacity: 0,
    showSearchIcon: true,
    showSearchBar: false,
    borderColor: '#fff',
  })

  const body = document.body.style
  const inputEl = useRef(null)

  useEffect(
    () => {
      body.background = uiProp.bg
      body.boxShadow = uiProp.shadow
      body.transition = uiProp.transition
      uiProp.showSearchBar && inputEl.current.focus()
    },
    [uiProp.shadow],
    [uiProp.showSearchBar]
  )

  const showSearch = () => {
    setUiProp({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true,
    })
  }

  const handleSearchFocus = () => {
    setUiProp({
      shadow: 'inset 0 -60vh 32vw 200px rgba(0, 0, 0, 0.8)',
      borderColor: 'gray',
    })
  }

  const handleSearchBlur = () => {
    setUiProp({
      shadow: 'none',
      opacity: 0,
      borderColor: '#fff',
      showSearchIcon: true,
    })
  }

  const searchStyle = {
    marginTop: '120px',
    fontSize: 50,
    cursor: 'pointer',
    top: 20,
    right: 20,
  }
  const inputStyle = {
    fontSize: '40px',
    textAlign: 'center',
    marginTop: '120px',
    width: '50%',
    height: '60px',
    color: '#eee',
    padding: '16px 4px',
    boxShadow: '0px 54px 60px -16px rgba(0, 0, 0, 0.75)',
    opacity: uiProp.opacity,
    border: 'none',
    borderBottom: `1px solid ${uiProp.borderColor}`,
    outline: 'none',
    background: 'transparent',
    transition: 'all 0.3s ease',
  }

  return (
    <div
      className='container text-center'
      style={{
        height: '100vh',
      }}
    >
      {uiProp.showSearchIcon ? (
        <FaSearch style={searchStyle} onClick={showSearch} />
      ) : (
        <input
          type='text'
          placeholder='Search'
          style={inputStyle}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          ref={inputEl}
        />
      )}
      <Title title={'Hidden Search App'} />
    </div>
  )
}

export default HiddenSearchBarApp
