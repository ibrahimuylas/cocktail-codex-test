
const initialState = { drinks: [] };

export const classicCocktailReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_CLASSIC_COCKTAILS_SUCCESS":{
            return {
                ...state,
                drinks: action.payload.drinks
            };
        }

        default: {
            return initialState;
        }
    }
}