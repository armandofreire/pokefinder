const initialState = {
  pokemonList: [],
  currentSearch: null,
  productList: [],
  pokemonDetails: false,
  currentView: null,
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
        currentView: 'pokemonList',
      };

    case 'SET_POKEMON_DETAILS':
      return {
        ...state,
        pokemonDetails: action.payload,
        currentView: 'pokemonDetails',
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
