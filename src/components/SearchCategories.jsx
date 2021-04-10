import { useState } from "react";
import PropTypes from 'prop-types';

export const SearchCategories = (props) =>
{
    const [inputValue, setInputValue] = useState('');

    // I avoid sending the form. Se activa al enviar el formulario
    const handleSubmit = (e) =>
    {
        e.preventDefault();

        // Si tiene contenido añado la búsqueda al final del array de las categorias
        if (inputValue.length > 0)
        {
            setInputValue(inputValue.trim());
            props.setCategories(gif => [inputValue, ...gif]);
        }
    }

    // Function to search GIFs. Cuando cambia el estado del input almaceno su valor
    const searchGif = (e) =>
    {
        setInputValue(e.target.value);
    }

    // Muestra la barra de búsqueda
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search GIFs" onChange={searchGif} name="" id=""/>
        </form>
    )
}

SearchCategories.protoTypes =
{
    setCategories: PropTypes.func.isRequired
}