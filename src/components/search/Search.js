import React, { useState, useEffect } from 'react';
import './Search.css';
import apiEndpoints from '../../services/PokeApi';
import List from './list/List';

let debounceTimer = null;

function PokemonList(props) {

  return (
    <List list={props.pokemonList} />
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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    apiEndpoints.getAllPokemon().then(pokemon => {
      setPokemonList([...pokemon.results]);
    });
  }, []);

  useEffect(() => {
    clearTimeout(debounceTimer);
    if (pokemon.trim() !== '') {
      setLoading(true);
      debounceTimer = setTimeout(async () => {
        let filteredList = pokemonList.filter(pokemonItem => pokemonItem.name.includes(pokemon.toLowerCase()));
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
    } else {
      setLoading(false);
      setFilteredPokemonList([]);
    }
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
        {loading ? <p>Loading...</p> :
          filteredPokemonList.length ?
            <PokemonList pokemonList={filteredPokemonList} /> :
            pokemon.length ? <p>No Pokémon found</p> : null
        }
      </section>
    </div>
  );
}

export default Search;
