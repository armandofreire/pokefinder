import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from './Redux/configureStore';

import PokemonDetailsContainer from './Components/PokemonDetails/PokemonDetailsContainer';
import ResultListContainer from './Components/ResultList/ResultListContainer';
import Template from './Components/template';

import registerServiceWorker from './registerServiceWorker';

import './index.css';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Template history={history}>
        <Switch>
          <Route path="/" component={ResultListContainer} exact />
          <Route path="/details/:pokemonId" component={PokemonDetailsContainer} />
        </Switch>
      </Template>
    </Router>
  </Provider>,
  document.getElementById('ml'),
);

registerServiceWorker();
