import React from 'react';
import { mount, shallow } from 'enzyme';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import SearchBar from './SearchBar';

describe('searchbar.test.js', () => {
  let sWrapper;
  let mWrapper;

  beforeEach(() => {
    const history = createBrowserHistory();

    sWrapper = <SearchBar />;
    mWrapper = <Router history={history}>{sWrapper}</Router>;
  });

  it('renders without crashing', () => {
    shallow(sWrapper);
  });

  it('should contain a link back to home', () => {
    const renderedComponent = mount(mWrapper);
    expect(renderedComponent.children().render().find('a').prop('href')).toBe('/');
  });
});
