import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../auth/authContext'
import { types } from "../../types/types";

export const LoginScreen = () => {

    const { user, dispatch } = useContext( AuthContext );

    const navigate = useNavigate();

    const handleLogin = () => {

        const action = {
            type: types.login,
            payload: {
                ...user,
                name: 'Fernando'
            }
        }

        dispatch( action );

        navigate( '/', {
            replace: true
        } )
    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
