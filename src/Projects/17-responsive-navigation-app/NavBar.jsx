import { useEffect, useState } from 'react'
import { NavItem } from '../../components'
import { NavStyle } from './NavStyle'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

// IMPORT PAGES
import { About, Contacts, Home } from '../../pages'

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
  }

  // UPDATE: ADDING PAGE NAVIGATION
  const [pages, setPages] = useState('')

  const navigate = (e) => {
    document
      .querySelectorAll('.nav-link')
      .forEach((link) => link.classList.remove('active'))
    e.target.classList.add('active')

    const navItem = e.target.innerText
    switch (navItem) {
      case 'Home':
        setPages(<Home page={'Home'} />)
        break
      case 'About':
        setPages(<About page={'About'} />)
        break
      case 'Contact':
        setPages(<Contacts page={'Contact'} />)
        break
      default:
        break
    }
  }
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
              <NavItem text={'Home'} active='active' onClick={navigate} />
              <NavItem text={'About'} onClick={navigate} />
              <NavItem text={'Contact'} onClick={navigate} />
            </ul>
          )}
        </div>
      </NavStyle>
      <div className='container px-2 outlet'>{pages}</div>
    </>
  )
}

export default NavBarApp
