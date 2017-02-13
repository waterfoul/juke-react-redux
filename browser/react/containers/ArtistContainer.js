import {connect} from 'react-redux';

import Artist from '../components/Artist';
import {toggleSong} from '../action-creators/player';

function mapStateToProps(state, ownProps) {
  return Object.assign({}, state.player, {
    selectedArtist: state.artists.selected,
    children: ownProps.children
  })
  // return {
  //   ...state.player,
  //   selectedArtist: state.artists.selected,
  //   children: ownProps.children
  // }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleOne: (song, list) => dispatch(toggleSong(song, list))
  }
}

const ArtistContainer = connect(mapStateToProps, mapDispatchToProps)(Artist);
export default ArtistContainer;
