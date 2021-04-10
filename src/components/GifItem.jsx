
/**
 * Recoje los datos de cada imagen y las muestra en pantalla
 */

export const GifItem = (props) =>
{
    return (
        <div className="card">
            <img src={props.img.image} alt={props.img.title} />
        </div>
    )
}