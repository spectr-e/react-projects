import { NavItem } from '../../components'
import { NavStyle } from './NavStyle'

const NavBarApp = () => {
  return (
    <NavStyle className='navbar bg-primary text-light'>
      <div className='navbar-logo'>
        <a href='#' className='navbar-brand'>
          Kamauu
        </a>
        {/* Open & Close Icons */}
      </div>

      <div className='navbar-collapse'>
        <ul className='navbar-items'>
          <NavItem text={'Home'} active='active' />
          <NavItem text={'About'} />
          <NavItem text={'Contact'} />
        </ul>
      </div>
    </NavStyle>
  )
}

export default NavBarApp
