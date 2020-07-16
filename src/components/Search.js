import React from 'react';
import './Search.css';

function SearchBar() {
  return(
    <input className="Search-Searchbar-input" type="text" />
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
