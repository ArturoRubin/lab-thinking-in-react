

import React from 'react';

const SearchBar = ({ handleSearch }) => {
    return (
        <div>
            <label> Search </label>
            <input
            
            placeholder='Search Products'
            onChange={handleSearch}
            type="text"
            id="id"

            ></input>
        </div>
    )
}

export default SearchBar;