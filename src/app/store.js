import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cocktailReducer from '../features/cocktail/cocktail-slice';
import { classicCocktailReducer } from '../features/classic-cocktails/classic-cocktail-reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cocktail: cocktailReducer,
    classicCocktail: classicCocktailReducer
  },
});
