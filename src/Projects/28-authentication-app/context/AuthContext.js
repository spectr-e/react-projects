import React, { useContext } from 'react'

export const AuthContext = React.useContext({
  status: null,
  login: () => {},
  logout: () => {},
})
