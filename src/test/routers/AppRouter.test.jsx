import React from 'react'

import { AppRouter } from "../../routers/AppRouter";

import { mount } from 'enzyme'
import { AuthContext } from "../../auth/authContext";



describe( 'Pruebas en App Router', () => {


    const contextValue = {
        user: {
            logged: false
        }
    }



    test( 'debe de mostrar el Login si no esta autenticado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                < AppRouter />
            </AuthContext.Provider>
        )


        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Login' )

    } )


} )
