import {connect} from 'react-redux';

import Playlist from '../components/Playlist';
import {toggleSong} from '../action-creators/player';

function mapStateToProps (state) {
  return Object.assign({}, state.player, {
      selectedPlaylist: state.playlists.selected
    })
  }

function mapDispatchToProps (dispatch) {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song, list))
  }
}

const PlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(Playlist);
export default PlaylistContainer;
