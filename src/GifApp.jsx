import { useState } from "react";
import { GifCard } from "./components/GifCard";
import {SearchCategories} from "./components/SearchCategories";

export const GifApp = () =>
{
    // Prueba añadiendo elementos a la lista
    const [categories, setCategories] = useState([]);

    return (
        <div>
            <h2>GIFs-Finder</h2>
            <SearchCategories setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map((gif, key) => <GifCard key={key} category={gif}/>)
                }
            </ol>
        </div>
    )
}