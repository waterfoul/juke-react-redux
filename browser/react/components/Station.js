import React from 'react';
import Songs from './Songs';

export function Station (props) {

  const name = 'Test Station';
  const songList = [{
    id: 1,
    name: "A Love Supreme",
    genre: "Jazz",
    artists: [{ name: "John Coltrane" }]
  }];
  const DUMMY_CURRENT_SONG = {};
  const DUMMY_IS_PLAYING = false;
  const DUMMY_TOGGLE_ONE = function () {};

  return (
    <div>
      <h3>{ name } Station</h3>
      <Songs
        currentSong={DUMMY_CURRENT_SONG}
        isPlaying={DUMMY_IS_PLAYING}
        songs={songList}
      />
      { songList && !songList.length && <small>No songs.</small> }
    </div>
  );

}

