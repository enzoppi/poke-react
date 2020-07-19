import React, { useEffect, useState } from 'react';
import apiEndpoints from '../../services/PokeApi';
import List from '../list/List';
import './Search.css';

let debounceTimer = null;

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
    const placeHolderImage = require('../../assets/pokeball.png')
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
          const pokemonInfo = (
            <div>
              <h4>Types:</h4>
              {pokemonProps.types.map(type => <p>{type.type.name}</p>)}
            </div>
            );
          pokemon.sprite = pokemonSprite || placeHolderImage;
          pokemon.info = pokemonInfo;
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
            <List list={filteredPokemonList} /> :
            pokemon.length ? <p>No Pokémon found</p> : null
        }
      </section>
    </div>
  );
}

export default Search;
