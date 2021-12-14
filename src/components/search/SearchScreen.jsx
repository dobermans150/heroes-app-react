import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

import queryString from 'query-string'
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse( location.search )
    const [ searchFormValue, handleInputChange ] = useForm( { searchText: q } );
    const { searchText } = searchFormValue;


    const heroesFiltered = useMemo( () => getHeroesByName( q ), [ q ] )

    const handleSearch = ( e ) => {
        e.preventDefault();
        navigate( `?q=${searchText}` )

    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search a hero..."
                            name="searchText"
                            autoComplete='off'
                            value={ searchText }
                            onChange={ handleInputChange }
                        />
                        <button
                            type="submit"
                            className="btn btn-outline-primary btn-block mt-1"
                        >
                            Search....
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        ( q === '' )
                            ? <div className="alert alert-info"> Search a Hero </div>
                            : ( heroesFiltered.length === 0 ) && <div className="alert alert-danger"> Not results</div>

                    }

                    {
                        heroesFiltered.map( hero => (
                            <HeroCard key={ hero.id } { ...hero } />
                        ) )
                    }
                </div>
            </div>
        </>
    )
}
