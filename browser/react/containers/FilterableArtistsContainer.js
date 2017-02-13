import React from 'react';
import {connect} from 'react-redux';
import {FilterableArtistsLocalContainer} from './FilterableArtistsLocalContainer';

function mapStateToProps(state, ownProps) {
  return Object.assign({}, ownProps, {
    list: state.artists.list
  });
}

const FilterableArtistsContainer = connect(mapStateToProps)(FilterableArtistsLocalContainer);
export default FilterableArtistsContainer;
