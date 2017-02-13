import React, {Component} from 'react';
import AUDIO from '../audio';
import Player from '../components/Player';

export class PlayerMounter extends Component {

  componentDidMount() {
    AUDIO.addEventListener('ended', this.props.next);
    AUDIO.addEventListener('timeupdate', () => this.props.timeUpdate(AUDIO.currentTime / AUDIO.duration));
  }

  render() {
    return (<Player {...this.props} />);
  }

}
