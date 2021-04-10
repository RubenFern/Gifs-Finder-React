import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
import {getGifs} from './../helpers/getGifs';

export const GifCard = (props) =>
{
    const [images, setImages] = useState([]);

    // Renderiza la función y en cada llamada impide que se recargue la página
    useEffect(() =>
    {
        getGifs(props).then(setImages);
    }, [props]);

    return (
        <>
            <h3>{props.category}</h3>

            <div className="card-grid">

                {
                    // Recorro el array de las búsqueda y llamo al GitItem mandando el objeto que la información de cada imagen
                    images.map( img =>
                    (
                        <GifItem key={img.id} img={img} />
                    ))
                }
            </div>
        </>
    )
}
