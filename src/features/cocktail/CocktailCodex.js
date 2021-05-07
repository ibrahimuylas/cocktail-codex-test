import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCocktailsAsync, selectErrorMessage, selectDrinks } from "./cocktail-slice";
import { CocktailSearchBox } from "./CocktailSearchBox";
import { Coctails } from "./Coctails";


export function CocktailCodex() {
    const errorMessage = useSelector(selectErrorMessage);
    const drinks = useSelector(selectDrinks);
    const dispatch = useDispatch();

    return (
        <div>
            <CocktailSearchBox onSearch={(filter) => dispatch(fetchCocktailsAsync(filter))} />
            {errorMessage}
            <Coctails drinks={drinks} />
        </div>
    );
}