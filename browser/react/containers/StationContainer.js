import {connect} from 'react-redux';

import {Station} from '../components/Station';
import {convertSong} from '../utils'
import {toggleSong} from '../action-creators/player'

function mapStateToProps(state, ownProps) {
  const stationName = ownProps.params.stationName;
  return {
    stationName,
    songs: state.songs.filter((song) => song.genre === stationName).map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song, list))
  };
}

export const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);
