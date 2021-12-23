import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth/authContext'
import { DashboardRoutes } from './DashboardRoutes'

export const PublicRoutes = ( { children } ) => {
    const { user } = useContext( AuthContext )


    return !user.logged ? children : <DashboardRoutes />
}
