import {api_key} from './../api_key.json';

// Realizo la petición a la API con la categoría que se buscó
export const getGifs = async(props) =>
{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(props.category)}&limit=12&api_key=${api_key}`;
    const res = await fetch(url);
    const {data} = await res.json();

    // Recorro la respuesta JSON de la búsqueda y lo guardo
    const gifs = data.map(img =>
    {
        return {
            id: img.id,
            title: img.title,
            image: img.images?.downsized_medium.url
        }
    });
    
     return gifs;
}