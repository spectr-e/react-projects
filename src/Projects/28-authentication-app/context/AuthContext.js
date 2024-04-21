import React, { useContext } from 'react'

export const AuthContext = useContext({
  status: null,
  login: () => {},
  logout: () => {},
})
