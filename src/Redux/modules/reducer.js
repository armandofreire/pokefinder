const initialState = {
  pokemonList: [],
  pokemonDetails: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CLEAR_POKEMON_DETAILS':
      return {
        ...state,
        pokemonDetails: false,
      };

    case 'SET_POKEMON_LIST':
      return {
        ...state,
        pokemonList: action.payload,
      };

    case 'SET_POKEMON_DETAILS':
      return {
        ...state,
        pokemonDetails: action.payload,
      };

    default:
      return state;
  }
}


export function clearPokemonDetails() {
  return { type: 'CLEAR_POKEMON_DETAILS' };
}

export function setPokemonDetails(payload, pokeId) {
  return {
    type: 'SET_POKEMON_DETAILS',
    payload,
    pokeId,
  };
}

export function listPokemons(payload) {
  return {
    type: 'SET_POKEMON_LIST',
    payload,
  };
}
