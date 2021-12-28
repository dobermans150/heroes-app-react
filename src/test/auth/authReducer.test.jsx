import { authReducer } from "../../auth/authReducer"
import { types } from "../../types/types"



describe( 'Pruebas en atuh reducer', () => {



    test( 'Debe de retornar el estado por defecto', () => {

        const state = authReducer( { logged: false }, {} )

        expect( state ).toEqual( { logged: false } )

    } )


    test( 'Debe de autenticar y colocar el "name" del usuario', () => {



        const action = {
            type: types.login,
            payload: { name: 'Christian' }
        }

        const state = authReducer( { logged: false }, action )

        expect( state ).toEqual( { logged: true, name: 'Christian' } )


    } )


    test( 'Debe de borrar en name del usuario y "logged" en false', () => {


        const action = {
            type: types.logout,
        }


        const state = authReducer( { logged: false, name: 'Christian' }, action )

        expect( state ).toEqual( { logged: false } )

    } )




} )
