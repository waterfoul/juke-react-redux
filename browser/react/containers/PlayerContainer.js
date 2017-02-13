import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import {PlayerMounter} from './PlayerMounterContainer';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return state.player;
}

function mapDispatchToProps(dispatch) {
  return {
    next: () => dispatch(next()),
    prev: () => dispatch(previous()),
    toggle: (currentSong, currentSongList) => dispatch(toggleSong(currentSong, currentSongList)),
    timeUpdate: (value) => dispatch(setProgress(value))
  }
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(PlayerMounter);
export default PlayerContainer;
