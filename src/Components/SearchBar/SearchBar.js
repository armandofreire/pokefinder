import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SearchBar.css';

// Se as imagens forem menores que 10k, retorna o base64
import logo from '../../assets/logo.svg';
import search from '../../assets/search.png';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { query: null };

    this.search = this._search.bind(this);
  }

  _search() {
    this.props.history.push({ pathname: `/details/${this.state.query}`, query: { pokemonId: this.state.query } });
  }

  render() {
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container pk-navbar">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" href>
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <div className="row pk-search">
            <div className="input-group">
              <input
                type="text"
                className="col-md-4 col-sm-12 col-xs-12 search-box pull-right"
                onChange={e => this.setState({ query: e.target.value })}
                onKeyPress={(event) => { if (event.key === 'Enter') { this.search(); } }}
                placeholder="#pokeid ou nome"
              />
              <span className="input-group-btn">
                <button
                  className="btn btn-default search-button"
                  type="button"
                  onClick={this.search}
                >
                  <img src={search} alt="buscar" />
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
