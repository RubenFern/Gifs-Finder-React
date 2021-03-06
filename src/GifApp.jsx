import { useState } from "react";
import { GifCard } from "./components/GifCard";
import {SearchCategories} from "./components/SearchCategories";

/**
 * Componente principal de la aplicación.
 * 
 * Llama a la barra de búsqueda y a los GIFs.
 * 
 * Mediante un useState, SearchCategories almacena la búsqueda y guarda su valor.
 * Ese valor es mandando a GifCard para realizar la búsqueda en la API
 */

export const GifApp = () =>
{
    const [categories, setCategories] = useState('');

    return (
        <>
            <header>
                <h2>GIFs-Finder</h2>
                <SearchCategories setCategories={setCategories} />
                <hr/>
            </header>
                    
            <div>
                {
                    <GifCard category={categories}/>
                }
            </div>
        </>
        
    )
}