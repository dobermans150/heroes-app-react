import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {
    const navigate = useNavigate()
    const [ searchFormValue, handleInputChange, reset ] = useForm( { searchText: '' } );
    const { searchText } = searchFormValue;

    const heroesFiltered = getHeroesByName( 'Batman' )

    const handleSearch = ( e ) => {
        e.preventDefault();
        navigate( `?q=${searchText}` )
        reset();
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
                        heroesFiltered.map( hero => (
                            <HeroCard key={ hero.id } { ...hero } />
                        ) )
                    }
                </div>
            </div>
        </>
    )
}
