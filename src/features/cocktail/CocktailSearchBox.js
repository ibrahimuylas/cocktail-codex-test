import React, { useState } from 'react';

export function CocktailSearchBox(props) {
    const [filter, setFilter] = useState('');
    
    return (
        <div>
            <input id="search" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Enter value to search cocktails" />
            <button onClick={() => props.onSearch(filter)}>Search</button>
        </div>
    );
};