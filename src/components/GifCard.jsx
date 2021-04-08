import {api_key} from './../api_key.json';

export const GifCard = (props) =>
{
    const getGifs = async() =>
    {
        const url = `https://api.giphy.com/v1/gifs/search?q=Iron+Man&limit=12&api_key=${api_key}`;
        const res = await fetch(url);
        const {data} = await res.json();

        const gifs = data.map(img =>
        {
            return {
                id: img.id,
                title: img.title,
                image: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
    }

    //getGifs();

    return (
        <div>
            <h2>{props.category}</h2>
        </div>
    )
}
