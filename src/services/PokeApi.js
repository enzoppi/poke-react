const apiEndpoints = {
  getAllPokemon: async (limit) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit || '1000'}`);
    return await res.json();
  },
  getPokemonByName: async (name) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await res.json();
  }
}

export default apiEndpoints;