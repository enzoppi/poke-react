import React, { useState, useEffect } from 'react';
import './Search.css';
import apiEndpoints from '../../services/PokeApi';

let debounceTimer = null;

function PokemonList(props) {
  return (
    <ul className="PokemonList">
      {props.pokemonList.map((pokemon) => {
        return <li className="PokemonList-Item" key={pokemon.name}>
          <img src={pokemon.sprite} alt={pokemon.name} />
          {pokemon.name}
        </li>
      })}
    </ul>
  )
}

function SearchBar(props) {
  return (
    <input className="Search-Searchbar-input" value={props.pokemon} onChange={(e) => props.setPokemon(e.target.value)} />
  )
}

function Search(props) {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiEndpoints.getAllPokemon().then(pokemon => {
      setPokemonList([...pokemon.results]);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
      let filteredList = pokemonList.filter(pokemonItem => pokemonItem.name.includes(pokemon));
      filteredList = filteredList.slice(0, 19);
      filteredList = await Promise.all(filteredList.map(async pokemon => {
        const res = await fetch(pokemon.url);
        const pokemonProps = await res.json();
        const pokemonSprite = pokemonProps.sprites.front_default;
        pokemon.sprite = pokemonSprite;
        return pokemon;
      }));
      setFilteredPokemonList(filteredList);
      setLoading(false);
    }, 1000);
  }, [pokemonList, pokemon]);

  return (
    <div className="Search">
      <section className="Search-Searchbar">
        <h2 className="Search-header">
          <p>
            Search for Pokémon!
          </p>
        </h2>
        <SearchBar searchString={pokemon} setPokemon={setPokemon} />
      </section>
      <section>
        {loading ? <p>Loading...</p> : <PokemonList pokemonList={filteredPokemonList} /> }
      </section>
    </div>
  );
}

export default Search;
