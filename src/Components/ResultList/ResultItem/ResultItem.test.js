import React from 'react';
import { mount, shallow } from 'enzyme';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import ResultItem from './ResultItem';

describe('resultItem.test.js', () => {
  let sWrapper;
  let mWrapper;

  beforeEach(() => {
    const history = createBrowserHistory();

    sWrapper = <ResultItem pokemon={{ name: 'Bulbasaur', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }} />;
    mWrapper = <Router history={history}>{sWrapper}</Router>;
  });

  it('renders without crashing', () => {
    shallow(sWrapper);
  });

  it('should return Pokemon name', () => {
    const renderedComponent = mount(mWrapper);
    expect(renderedComponent.children().render().find('.btn-details').text()).toBe('Bulbasaur');
  });

  it('should validate if image SRC is a valid constructed URL', () => {
    const renderedComponent = mount(mWrapper);
    const imgSrc = renderedComponent.children().render().find('img').prop('src');
    let isValidConstructedUrl;
    try {
      isValidConstructedUrl = new URL(imgSrc);
    } catch (e) {
      isValidConstructedUrl = false;
    }

    expect(isValidConstructedUrl).toBeInstanceOf(URL);
  });
});
