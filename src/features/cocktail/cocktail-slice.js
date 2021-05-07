import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: '',
    drinks: [],
    errorMessage: ''
};

export const fetchCocktailsAsync = createAsyncThunk(
    'cocktails/fetch',
    async (filter) => {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${filter}`)
            .then(response => response.json())
            .then(data => data);
        return response;
    }
);

export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCocktailsAsync.pending, (state) => {
                return {
                    ...state,
                    status: "loading",
                    drinks: [],
                    errorMessage: ''
                };
            })
            .addCase(fetchCocktailsAsync.fulfilled, (state, action) => {
                return {
                    ...state,
                    status: "loaded",
                    drinks: action.payload.drinks,
                    errorMessage: ''
                };
            })
            .addCase(fetchCocktailsAsync.rejected, (state, action) => {
                state.status = "failed";
                state.drinks = [];
                state.errorMessage = action.error.message;
            })
    }
});

export const selectDrinks = (state) => state.cocktail.drinks;

export const selectErrorMessage = (state) => state.cocktail.errorMessage;

export default cocktailSlice.reducer;