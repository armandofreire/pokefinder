import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ResultListContainer from './ResultListContainer';

const mockStore = configureStore();

describe('ResultListContainer', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({});
    store.listPokemons = jest.fn();
    store.setPokemonDetails = jest.fn();
    store.dispatch = jest.fn();
    wrapper = shallow(<ResultListContainer store={store} />);
  });

  it('maps state and dispatch to props', () => {
    expect(wrapper.props()).toEqual(expect.objectContaining({
      listPokemons: expect.any(Function),
      setPokemonDetails: expect.any(Function),
    }));
  });

  it('maps listPokemons to dispatch SET_POKEMON_LIST action', () => {
    wrapper.props().listPokemons();

    expect(store.dispatch).toHaveBeenCalledWith({ type: 'SET_POKEMON_LIST' });
  });

  it('maps setPokemonDetails to dispatch SET_POKEMON_DETAILS action', () => {
    wrapper.props().setPokemonDetails();

    expect(store.dispatch).toHaveBeenCalledWith({ type: 'SET_POKEMON_DETAILS' });
  });
});
