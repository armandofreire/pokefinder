import { listPokemons, clearPokemonDetails, setPokemonDetails } from './reducer';

describe('Redux actions', () => {
  it('Should add a [pokemon] to pokemonList', () => {
    const payload = {
      payload: [
        { name: 'Bulbasaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
        { name: 'Ivysaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }
      ],
    };

    const expectedAction = {
      type: 'SET_POKEMON_LIST',
      payload,
    };

    expect(listPokemons(payload)).toEqual(expectedAction);
  });

  it('Should add a {pokemonDetail} to pokemonDetails', () => {
    const payload = {
      pokemonDetails: {
        id: 1,
        height: 10,
        weight: 10,
        stats: [{ base_stat: 10, stat: { name: 'Bulbasaur' } }],
        types: [{ type: 'Poison' }],
        moves: [{ type: 'Razor Leaf' }],
      },
    };

    const expectedAction = {
      type: 'SET_POKEMON_DETAILS',
      payload,
    };

    expect(setPokemonDetails(payload)).toEqual(expectedAction);
  });

  it('Should clear pokemon details', () => {
    const expectedAction = {
      type: 'CLEAR_POKEMON_DETAILS',
    };

    expect(clearPokemonDetails(expectedAction)).toEqual(expectedAction);
  });
});
