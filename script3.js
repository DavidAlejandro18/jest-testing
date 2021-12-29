const fetch = require('isomorphic-fetch');

const fetchPokemon = async (pokemon, fetch) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const results = await fetch(apiUrl);
    const data = await results.json();
    return {
        name: data.name,
        height: data.height,
        weight: data.weight
    };
};

module.exports = fetchPokemon;