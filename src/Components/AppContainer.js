import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { setPokemonDetails, listPokemons } from '../Redux/modules/reducer';

import App from './App';

class AppContainer extends Component {
  render() {
    return (
      <App {...this.props} />
    );
  }
}

const mapStateToProps = state => (state);

const mapDispatchToProps = {
  setPokemonDetails,
  listPokemons,
};

export default ReactRedux.connect(mapStateToProps,	mapDispatchToProps)(AppContainer);
