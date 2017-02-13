import React, {Component} from 'react';
import Lyrics from '../components/Lyrics';

export default class extends Component {

  constructor(props) {

    super(props);

    this.state = {
      artistQuery: '',
      songQuery: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.artistQuery && this.state.songQuery) {
      this.props.onLyricsInput(this.state.artistQuery, this.state.songQuery)
    }
  }

  render() {
    return (
      <Lyrics
        lyrics={this.props.lyrics}
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}
