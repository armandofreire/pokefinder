import React from 'react';

import SearchBar from './SearchBar/SearchBar';

import './App.css';

const Template = props => (
  <div>
    <SearchBar
      history={props.history}
      setItems={props.setItems}
    />
    <div className="container pk-container">
      { props.children }
    </div>
  </div>
);

export default Template;
