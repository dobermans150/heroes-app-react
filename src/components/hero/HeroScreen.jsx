import { useMemo } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { heroImages } from '../../helpers/heroImages';
import { getHeroById } from '../../selectors/getHeroeById';

// import batman from '../../assets/img/dc-batman.jpg' recurso estatico


export const HeroScreen = () => {

    const { heroId } = useParams();
    const navigate = useNavigate();

    const hero = useMemo( () => getHeroById( heroId ), [ heroId ] );


    if ( !hero ) {
        return <Navigate to='/' />
    }

    const {
        id,
        alter_ego,
        characters,
        first_appearance,
        publisher,
        superhero
    } = hero



    /*  const imagePath = `/assets/img/${id}.jpg` */

    const handleReturn = () => {

        navigate( -1 )

    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    /* src={ imagePath }  desde la carpte puclic*/
                    /* src={ batman } importaction estatica */
                    src={ heroImages( `./${id}.jpg` ).default }
                    alt={ superhero }
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                />



            </div>


            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego:</b> { alter_ego }
                    </li>
                    <li className="list-group-item">
                        <b>Publisher:</b> { publisher }
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance:</b> { first_appearance }
                    </li>
                </ul>

                <h5 className="mt-5">Characters</h5>
                <p>{ characters }</p>

                <button
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    )
}
