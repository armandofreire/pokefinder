import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { getPokeThumb, getPokeId } from '../../../Utils/PokeUtils';

import './ResultItem.css';

// class ResultItem extends Component {
const ResultItem = ({ pokemon }) => (
  <div className="col-md-4 col-sm-4 text-center pokemon">
    <div className="col-md-12">
      <img src={getPokeThumb(getPokeId(pokemon.url))} width={96} height={96} alt={pokemon.name} />
    </div>
    <div className="col-md-12">
      <Link
        to={`/details/${getPokeId(pokemon.url)}`}
        className="btn-details"
        href
      >
        { pokemon.name }
      </Link>
    </div>
  </div>
);

const {
  shape, string,
} = PropTypes;

ResultItem.propTypes = {
  pokemon: shape({
    url: string.isRequired,
    name: string.isRequired,
  }).isRequired,
};

export default ResultItem;
