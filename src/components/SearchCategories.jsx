import { useState } from "react";
import PropTypes from 'prop-types';

export const SearchCategories = (props) =>
{
    const [inputValue, setInputValue] = useState();

    // I avoid sending the form
    const handleSubmit = (e) =>
    {
        e.preventDefault();

        if (inputValue.trim().length > 0)
        {
            props.setCategories(gif => [...gif, inputValue]);
        }
    }

    // Function to search GIFs
    const searchGif = (e) =>
    {
        setInputValue(e.target.value);
    }

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