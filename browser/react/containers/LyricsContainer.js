import {connect} from 'react-redux';
import LyricsLocalContainer from './LyricsLocalContainer';

import {searchLyrics} from '../action-creators/lyrics';

function mapStateToProps (state) {
  return {
    lyrics: state.lyrics
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onLyricsInput: (artistQuery, songQuery) => dispatch(searchLyrics(artistQuery, songQuery))
  }
}

const LyricsContainer = connect(mapStateToProps, mapDispatchToProps)(LyricsLocalContainer);
export default LyricsContainer;
