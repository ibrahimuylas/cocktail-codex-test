import React from 'react';

export const Coctails = ({ drinks }) => {

    return (
        <ul>
            {
                !drinks.length ? '' :
                    drinks.map(_ => <li>{_.strDrink}</li>)
            }
        </ul>
    );
}