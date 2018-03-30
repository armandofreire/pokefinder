import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { listPokemons, setPokemonDetails } from '../../Redux/modules/reducer';

import ResultList from './ResultList';

class ResultListContainer extends Component {
  render() {
    return (
      <ResultList {...this.props} />
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = {
  listPokemons,
  setPokemonDetails,
};

export default ReactRedux.connect(mapStateToProps,	mapDispatchToProps)(ResultListContainer);
