import { useState, useEffect } from 'react';
import {api_key} from './../api_key.json';
import { GifItem } from './GifItem';

export const GifCard = (props) =>
{
    const [images, setImages] = useState([]);

    // Renderiza la función y en cada llamada impide que se recargue la página
    useEffect(() =>
    {
        getGifs();
    }, [props.category]);

    // Realizo la petición a la API con la categoría que se buscó
    const getGifs = async() =>
    {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(props.category)}&limit=12&api_key=${api_key}`;
        const res = await fetch(url);
        const {data} = await res.json();

        // Recorro la respuesta JSON de la búsuqeda y lo guardo
        const gifs = data.map(img =>
        {
            return {
                id: img.id,
                title: img.title,
                image: img.images?.downsized_medium.url
            }
        });

        // La búsqueda guardada la almaceno en un array para después mandarla al GifItem que muestra las fotos
        setImages(gifs);
    }

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
