import React from 'react';
import { shallow, mount } from 'enzyme';
import PokemonDetails from './PokemonDetails';

describe('PokemonDetails.test.js', () => {
  const pokemonDetails = {
    stats: [],
    types: [],
    moves: [],
  };

  it('renders without crashing', () => {
    shallow(<PokemonDetails pokemonDetails={pokemonDetails} />);
  });

  it('should render a loading if no pokemonDetails', () => {
    expect(shallow(<PokemonDetails pokemonDetails={false} />).find('.pokeloading').exists()).toBe(true);
  });

  it('should render a stat if pokemonDetails.stats is not empty', () => {
    const mockStat = {
      stat: { name: 'Super skill' },
      base_stat: '50',
    };

    const updatedPokemonDetails = {
      ...pokemonDetails,
      stats: [mockStat],
    };

    const renderedComponent = shallow(<PokemonDetails pokemonDetails={updatedPokemonDetails} />);
    expect(renderedComponent.children().render().find('.stats')).toBeTruthy();
  });

  it('should render a type if pokemonDetails.types is not empty', () => {
    const mockType = {
      type: { name: 'Poison' },
    };

    const updatedPokemonDetails = {
      ...pokemonDetails,
      types: [mockType],
    };

    const renderedComponent = shallow(<PokemonDetails pokemonDetails={updatedPokemonDetails} />);
    expect(renderedComponent.children().render().find('.types')).toBeTruthy();
  });

  it('should render a move if pokemonDetails.moves is not empty', () => {
    const mockMove = {
      move: { name: 'Razor leaf' },
    };

    const updatedPokemonDetails = {
      ...pokemonDetails,
      move: [mockMove],
    };

    const renderedComponent = shallow(<PokemonDetails pokemonDetails={updatedPokemonDetails} />);
    expect(renderedComponent.children().render().find('.moves')).toBeTruthy();
  });
});
