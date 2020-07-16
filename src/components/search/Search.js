import React, { useState, useEffect } from 'react';
import './Search.css';

function SearchBar() {
  const [pokemon, setPokemon] = useState('');

  return (
    <input className="Search-Searchbar-input" value={pokemon} onChange={(e) => setPokemon(e.target.value)} />
  )
}

function Search() {
  return (
    <div className="Search">
      <header className="Search-header">
        <p>
          Search for Pokémon!
        </p>
      </header>
      <section className="Search-Searchbar">
        <SearchBar />
      </section>
    </div>
  );
}

export default Search;
