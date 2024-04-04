import styled from 'styled-components'

export const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 12px;
  user-select: none;

  a {
    color: inherit;
  }

  .navbar-items {
    display: flex;
    justify-content: center;
    align-content: center;
    &.showNavBar {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 16px;
      margin: 16px;
      width: 100%;
    }
    & .nav-link {
      margin-right: 16px;
      opacity: 0.8;
      padding: 4px 8px;
      border: 1px solid transparent;
      border-radius: 4px;
      transition: all 0.2s ease;
      &:hover {
        border: 1px solid #dddd;
      }
      &.active {
        background: #fff;
        color: black;
        transition: all 0.2s ease;
      }
    }
  }
  &.showNavBar {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`
