import { useEffect, useState } from 'react'
import { NavItem } from '../../components'
import { NavStyle } from './NavStyle'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBarApp = () => {
  const [showElement, setShowElement] = useState({
    mobileNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  })

  useEffect(() => {
    window.onresize = () => {
      const windowWidth = window.innerWidth
      windowWidth > 600 &&
        setShowElement({
          mobileNav: true,
          hamburgerIcon: false,
        })
      windowWidth < 600 &&
        setShowElement({
          mobileNav: false,
          hamburgerIcon: true,
        })
    }
  }, [])

  const openNav = () => {
    setShowElement({
      mobileNav: true,
      hamburgerIcon: false,
      closeIcon: true,
      navOpened: true,
    })
  }
  const closeNav = () => {
    setShowElement({
      mobileNav: false,
      hamburgerIcon: true,
      closeIcon: false,
      navOpened: false,
    })
  }

  const handleActive = (e) => {
    document
      .querySelectorAll('.nav-link')
      .forEach((link) => link.classList.remove('active'))
    e.target.classList.add('active')
    setPage(e.target.innerText)
  }

  const [page, setPage] = useState('')
  return (
    <>
      <NavStyle
        className={`navbar bg-primary text-light ${
          showElement.navOpened && 'showNavBar'
        }`}
      >
        <div className='navbar-logo'>
          <a href='#' className='navbar-brand font-semibold'>
            Kamauu
          </a>
          {/* Open & Close Icons */}
          {showElement.hamburgerIcon && <AiOutlineMenu onClick={openNav} />}
          {showElement.closeIcon && <AiOutlineClose onClick={closeNav} />}
        </div>

        <div className='navbar-collapse'>
          {showElement.mobileNav && (
            <ul
              className={`navbar-items ${
                showElement.navOpened && 'showNavBar'
              }`}
            >
              <NavItem text={'Home'} active='active' onClick={handleActive} />
              <NavItem text={'About'} onClick={handleActive} />
              <NavItem text={'Contact'} onClick={handleActive} />
            </ul>
          )}
        </div>
      </NavStyle>
      <h1 className='title text-center text-primary'>
        {!page ? 'Welcome' : page}
      </h1>
    </>
  )
}

export default NavBarApp
