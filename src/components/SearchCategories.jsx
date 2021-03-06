import { useState } from "react";
import PropTypes from 'prop-types';

export const SearchCategories = (props) =>
{
    const [inputValue, setInputValue] = useState('');

    // I avoid sending the form. Se activa al enviar el formulario
    const handleSubmit = (e) =>
    {
        e.preventDefault();

        // Si tiene contenido sobreescribo el valor de categories 
        // El valor del input se obtiene de la función searchGif pues cambia el estado del useState
        if (inputValue.length > 0)
        {
            setInputValue(inputValue.trim());
            props.setCategories(inputValue);

            // Si quisiese mostrar todas la búsquedas
            //props.setCategories(gif => [inputValue, ...gifs]);

            // Empty the seeker
            document.getElementById("browser").value = '';
        }
    }

    // Cuando cambia el estado del input almaceno su valor en el useState.
    const searchGif = (e) =>
    {
        setInputValue(e.target.value);
    }

    // Muestra la barra de búsqueda
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search GIFs" onChange={searchGif} id="browser" />

            <input type="submit" value="Search"/>
        </form>
    )
}

SearchCategories.protoTypes =
{
    setCategories: PropTypes.func.isRequired
}