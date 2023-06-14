import React from 'react';
import { useState } from "react";
const SearchParams = () => {
    const [location, setLocation] = useState("");
    return (
        // Debemos poner el nombre de la clase indicado como className debido a que class es una palabra reservada en JS.
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input
                    onChange={(e) => setLocation(e.target.value)} 
                    id="location" 
                    value={location} 
                    placeholder="Location" 
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;