export function fetchClassicCocktails(filter) {
    return async dispatch => {
        dispatch({ type: "FETCH_CLASSIC_COCKTAILS" });

        const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${filter}`)
            .then(response => response.json())
            .then(data => data);

        return dispatch({ type: "FETCH_CLASSIC_COCKTAILS_SUCCESS", payload: result });

    };
}