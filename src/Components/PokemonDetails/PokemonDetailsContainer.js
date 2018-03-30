import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as ReactRedux from 'react-redux';

import { setPokemonDetails, clearPokemonDetails } from '../../Redux/modules/reducer';
import { getPokemonDetails } from '../../Utils/RequestManager';

import PokemonDetails from './PokemonDetails';


class PokemonDetailsContainer extends Component {
  componentDidMount() {
    this.props.clearPokemonDetails();
    getPokemonDetails(this.props.match.params.pokemonId)
      .then((result) => {
        this.props.setPokemonDetails(result.data, this.props.match.params.pokemonId);
      })
      .catch(() => alert('Falha ao buscar Pokémon'));
  }

  render() {
    return (
      <PokemonDetails {...this.props} />
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = {
  setPokemonDetails,
  clearPokemonDetails,
};


PokemonDetails.propTypes = {
  setPokemonDetails: PropTypes.func.isRequired,
  clearPokemonDetails: PropTypes.func.isRequired,
};

export default ReactRedux.connect(mapStateToProps, mapDispatchToProps)(PokemonDetailsContainer);
