import {connect} from 'react-redux';

import {Stations} from '../components/Stations';

function convertToStations(songsArray) {
  // return songsArray.reduce((acc, value) => {
  //   let genreArr = acc[value.genre] || [];
  //   genreArr = [...genreArr, value];
  //   const merge = {};
  //   merge[value.genre] = genreArr;
  //   return Object.assign({}, acc, merge);
  // }, {});
  return songsArray.reduce((acc, value) => {
    acc[value.genre] = acc[value.genre] || [];
    acc[value.genre].push(value);
    return acc;
  }, {});
}

function mapStateToProps(state) {
  return {
    stations: convertToStations(state.songs)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);