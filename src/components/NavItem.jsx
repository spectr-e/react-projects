const NavItem = ({ active = '', text }) => {
  return (
    <li className='nav-item'>
      <a href='#' className={`nav-link ${active}`}>
        {text}
      </a>
    </li>
  )
}

export default NavItem
