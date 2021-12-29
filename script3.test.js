const fetch = require('isomorphic-fetch');
const fetchPokemon = require('./script3');

it("Find the Pokemon from PokeAPI and return its name, weight and height", () => {
    expect.assertions(3);
    return fetchPokemon("bulbasaur", fetch).then(data => {
        expect(data.name).toBe("bulbasaur");
        expect(data.height).toBe(7);
        expect(data.weight).toBe(69);
    });
})