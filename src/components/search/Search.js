import React from 'react';
import './Search.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { pokemon: '' };
  }

  handleChange(e) {
    this.setState({ pokemon: e.target.value });
  }

  render() {
    const pokemon = this.state.pokemon;
    return (
      <input className="Search-Searchbar-input" value={pokemon} onChange={this.handleChange} />
    )
  }
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
