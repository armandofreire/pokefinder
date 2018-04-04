import { listPokemons, clearPokemonDetails } from './reducer';

describe('Redux actions', () => {
  it('Should add a Pokemon to pokemonList', () => {
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

  it('Should clear pokemon details', () => {
    const expectedAction = {
      type: 'CLEAR_POKEMON_DETAILS',
    };

    expect(clearPokemonDetails(expectedAction)).toEqual(expectedAction);
  });
});