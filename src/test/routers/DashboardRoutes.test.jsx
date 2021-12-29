import { DashboardRoutes } from "../../routers/DashboardRoutes"
import { mount } from 'enzyme'
import { AuthContext } from "../../auth/authContext"
import { MemoryRouter } from "react-router-dom"



describe( 'Pruebas en <DashboardRaoutes  />', () => {


    test( 'Debe de mostrarse correctamente - Marvel', () => {


        const contextValue = {
            user: {
                loggedIn: true,
                name: 'Christian'
            }
        }

        const wrapper = mount(

            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ [ '/' ] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find( '.text-info' ).text().trim() ).toBe( contextValue.user.name )
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Marvel screen' )
        

    } )


    test( 'Debe de mostrarse correctamente - DC', () => {


        const contextValue = {
            user: {
                loggedIn: true,
                name: 'Christian'
            }
        }

        const wrapper = mount(

            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={ [ '/dc' ] }>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find( 'h1' ).text().trim() ).toBe( 'Dc Screen' )



    } )



} )
