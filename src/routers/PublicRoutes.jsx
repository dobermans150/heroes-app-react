import { useContext } from 'react'
import { AuthContext } from '../auth/authContext'
import { DashboardRoutes } from './DashboardRoutes'

export const PublicRoutes = ( { children } ) => {
    const { user } = useContext( AuthContext )


    return !user.logged ? children : <DashboardRoutes />
}
