import React from 'react';
import { shallow } from 'enzyme';
import createBrowserHistory from 'history/createBrowserHistory';
import Template from './template';

describe('resultItem.test.js', () => {
  let sWrapper;

  beforeEach(() => {
    const history = createBrowserHistory();

    sWrapper = <Template history={history} />;
  });

  it('renders without crashing', () => {
    shallow(sWrapper);
  });

  it('expects componentn to have a pk-container', () => {
    expect(shallow(sWrapper).find('.pk-container').exists()).toBe(true);
  });
});
