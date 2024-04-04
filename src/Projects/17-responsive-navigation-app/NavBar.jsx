import { useEffect, useState } from 'react'
import { NavItem } from '../../components'
import { NavStyle } from './NavStyle'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBarApp = () => {
  const [showElement, setShowElement] = useState({
    navbarNav: true,
    hamburgerIcon: false,
    closeIcon: false,
    navOpened: false,
  })

  useEffect(() => {
    window.onresize = () => {
      const windowWidth = window.innerWidth
      windowWidth > 600 &&
        setShowElement({
          navbarNav: true,
          hamburgerIcon: false,
        })
      windowWidth < 600 &&
        setShowElement({
          navbarNav: false,
          hamburgerIcon: true,
        })
    }
  }, [])

  return (
    <NavStyle className='navbar bg-primary text-light'>
      <div className='navbar-logo'>
        <a href='#' className='navbar-brand'>
          Kamauu
        </a>
        {/* Open & Close Icons */}
        {showElement.hamburgerIcon && <AiOutlineMenu />}
        {showElement.closeIcon && <AiOutlineClose />}
      </div>

      <div className='navbar-collapse'>
        {showElement.navbarNav && (
          <ul className='navbar-items'>
            <NavItem text={'Home'} active='active' />
            <NavItem text={'About'} />
            <NavItem text={'Contact'} />
          </ul>
        )}
      </div>
    </NavStyle>
  )
}

export default NavBarApp
