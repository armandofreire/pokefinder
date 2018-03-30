import React from 'react';
import PropTypes from 'prop-types';

import { getPokeThumb } from '../../Utils/PokeUtils';
import pikachu from '../../assets/pikachu.gif';
import './PokemonDetails.css';

const PokemonDetails = ({ pokemonDetails }) => (
  <div className="col-md-12">
    {
    !pokemonDetails ?
      <div className="text-center pokeloading">
        <h4>Estamos capturando o Pokémon selecionado</h4>
        <p><img src={pikachu} alt="loading" /></p>
      </div>
    :
      <div>
        <h3 className="detail-title">
          { pokemonDetails.name }
          <span className="pull-right">#{pokemonDetails.id}</span>
        </h3>
        <div className="row-fluid">
          <div className="col-md-4">
            <img
              src={getPokeThumb(pokemonDetails.id)}
              width={96}
              height={96}
              alt={pokemonDetails.name}
            />
          </div>
        </div>
        <div className="row-fluid">
          <div className="col-md-8 pokeinfo">
            <div className="col-md-2 stats text-center weight">
              <p>Weight</p>
              <p>{pokemonDetails.weight}</p>
            </div>
            <div className="col-md-2 stats text-center height">
              <p>Height</p>
              <p>{pokemonDetails.height}</p>
            </div>
            {
              pokemonDetails.stats.map(stat =>
                (
                  stat.stat.name !== 'special-attack' && stat.stat.name !== 'special-defense' &&
                  <div className={`col-md-2 stats text-center ${stat.stat.name}`} key={stat.stat.name}>
                    <p>{stat.stat.name}</p>
                    <p>{stat.base_stat}</p>
                  </div>
                ))
            }
          </div>
        </div>
        <div className="row-fluid">
          <div className="col-md-12 description">
            <h4>Types</h4>
            {
                pokemonDetails.types.map(type =>
                  (
                    <div className={`col-md-2 types text-center ${type.type.name}`} key={type.type.name}>
                      <p>{type.type.name}</p>
                    </div>
                  ))
              }
          </div>
          <div className="col-md-12 description">
            <h4>Moves</h4>
            {
                pokemonDetails.moves.map(move =>
                  (
                    <div className="col-md-2 moves text-center" key={move.move.name}>
                      <p>{move.move.name.split('-').join(' ')}</p>
                    </div>
                  ))
              }
          </div>
        </div>
      </div>
    }
  </div>
);

const {
  arrayOf, shape, number, string,
} = PropTypes;

PokemonDetails.defaultProps = {
  pokemonDetails: false,
};

PokemonDetails.propTypes = {
  pokemonDetails: shape({
    id: number,
    height: number,
    weight: number,
    stats: arrayOf(shape({
      base_stat: number,
      stat: shape({
        name: string,
      }),
    })),
    types: arrayOf(shape({
      type: shape({
        name: string,
      }),
    })),
    moves: arrayOf(shape({
      move: shape({
        name: string,
      }),
    })),
  }),
};

export default PokemonDetails;
