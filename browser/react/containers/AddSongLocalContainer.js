import React from 'react';

import AddSong from '../components/AddSong';

export class AddSongLocalContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songId: 1,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.mount();
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {

    evt.preventDefault();

    const playlistId = this.props.playlistId;
    const songId = this.state.songId;

    this.props.addSong(playlistId, songId)
      .catch(() => this.setState({ error: true }));

  }

  render() {

    const songs = this.props.songs;
    const error = this.state.error;

    return (
      <AddSong
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
