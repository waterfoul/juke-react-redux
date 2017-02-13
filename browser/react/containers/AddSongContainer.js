import React from 'react';
import {connect} from 'react-redux';

import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

import {AddSongLocalContainer} from './AddSongLocalContainer';

function mapStateToProps(state, ownProps) {
  return Object.assign({}, ownProps, {
    playlistId: state.playlists.selected.id,
    songs: state.songs
  })
}

function mapDispatchToProps(dispatch) {
  return {
    mount: () => dispatch(loadAllSongs()),
    addSong: (playlistId, songId) => dispatch(addSongToPlaylist(playlistId, songId))
  }
}


const AddSongContainer = connect(mapStateToProps, mapDispatchToProps)(AddSongLocalContainer);
export default AddSongContainer;
