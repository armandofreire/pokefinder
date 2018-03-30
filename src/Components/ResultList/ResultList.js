import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ResultItem from './ResultItem/ResultItem';

import { getPokemonList } from '../../Utils/RequestManager';
import pidgeot from '../../assets/pidgeot.gif';

import './ResultList.css';

class ResultList extends Component {
  componentDidMount() {
    getPokemonList().then((result) => {
      this.props.listPokemons(result.data.results);
    });
  }

  render() {
    return (
      <div className="row pk-items">
        {
        this.props.pokemonList.length === 0 ?
          <div className="text-center pokeloading">
            <h4>Estamos capturando alguns Pokémons</h4>
            <p><img src={pidgeot} alt="loading" /></p>
          </div>
        :
          this.props.pokemonList.map(pokemon =>
            (<ResultItem
              pokemon={pokemon}
              key={pokemon.name}
            />))
        }
      </div>
    );
  }
}

const {
  arrayOf, shape, string, func,
} = PropTypes;

ResultList.propTypes = {
  pokemonList: arrayOf(shape({
    url: string.isRequired,
    name: string.isRequired,
  }).isRequired).isRequired,
  listPokemons: func.isRequired,
};

export default ResultList;
