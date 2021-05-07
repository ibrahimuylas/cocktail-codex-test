import cocktailReducer, { fetchCocktailsAsync } from './cocktail-slice.js';

describe('cocktail slice', () => {

    const initialState = {
        drinks: []
    };

    it('should handle initial state', () => {
        const state = cocktailReducer(undefined, { type: 'unknown' });
        expect(state).toEqual({ drinks: [], status: '', errorMessage: '' });
    });

    it('should drinks fullfilled', () => {
        const state = cocktailReducer(initialState, { type: fetchCocktailsAsync.fulfilled, payload: { drinks: [{ strDrink: "A1" }] } });
        expect(state.drinks.length).toBeGreaterThanOrEqual(1);
    });
});