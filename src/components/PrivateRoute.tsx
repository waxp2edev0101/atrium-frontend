import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAppSelector } from '../hooks'

export const PrivateRoute = ({
  children,
}: {
  children: React.ReactElement
}) => {
  const connected = useAppSelector((state) => state.user.walletConnected)
  return connected ? children : <Navigate to="/" />
}
