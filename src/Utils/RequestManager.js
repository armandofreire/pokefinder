import axios from 'axios';

export function getPokemonList() {
  return axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(response => response)
    .catch((error) => {
      console.log(error);
    });
}

export function getPokemonDetails(pokeId) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`)
    .then(response => response)
    .catch((error) => {
      console.log(error);
    });
}
