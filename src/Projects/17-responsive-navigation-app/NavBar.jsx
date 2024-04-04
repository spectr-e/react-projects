const NavBar = () => {
  return (
    <nav>
      <div className='navbar-logo'>
        <a href='#' className='navbar-brand'>
          Kamauu
        </a>

        {/* Open & Close Icons */}
      </div>

      <div className='navbar-collapse'>
        <ul className='navbar-items'>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              Home
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
