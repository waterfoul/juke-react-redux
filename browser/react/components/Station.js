import React from 'react';
import Songs from './Songs';

export function Station ({stationName, songs, currentSong, isPlaying, toggleOne}) {

  return (
    <div>
      <h3>{ stationName } Station</h3>
      <Songs
        currentSong={currentSong}
        isPlaying={isPlaying}
        songs={songs}
        toggleOne={toggleOne}
      />
    { songs && !songs.length && <small>No songs.</small> }
    </div>
  );

}
