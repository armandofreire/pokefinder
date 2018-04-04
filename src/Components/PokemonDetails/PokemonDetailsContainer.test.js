import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import PokemonDetailsContainer from './PokemonDetailsContainer';

const mockStore = configureStore();

describe('PokemonDetailsContainer', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.setPokemonDetails = jest.fn();
    store.clearPokemonDetails = jest.fn();
    store.dispatch = jest.fn();
    wrapper = shallow(<PokemonDetailsContainer store={store} />);
  });

  it('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      setPokemonDetails: expect.any(Function),
      clearPokemonDetails: expect.any(Function),
    }));
  });

  it('maps setPokemonDetails to dispatch SET_POKEMON_DETAILS action', () => {
    wrapper.props().setPokemonDetails();

    expect(store.dispatch).toHaveBeenCalledWith({ type: 'SET_POKEMON_DETAILS' });
  });

  it('maps clearPokemonDetails to dispatch CLEAR_POKEMON_DETAILS action', () => {
    wrapper.props().clearPokemonDetails();

    expect(store.dispatch).toHaveBeenCalledWith({ type: 'CLEAR_POKEMON_DETAILS' });
  });
});
