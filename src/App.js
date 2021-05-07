import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { CocktailCodex } from './features/cocktail/CocktailCodex';
import ClassicCocktailCodex from './features/classic-cocktails/ClassicCocktailCodex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <i>Cocktails</i>
        <CocktailCodex />
        <p>Classic Cocktails</p>
        <ClassicCocktailCodex />
      </header>
    </div>
  );
}

export default App;
