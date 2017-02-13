import React from 'react';
import {Link} from 'react-router';

export function Stations ({stations}) {
  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
        {
          Object.keys(stations).map((stationName) => (
            <div className="list-group-item" key={stationName}>
              <Link to={`stations/${stationName}`}>{stationName}</Link>
            </div>
          ))
        }
      </div>
    </div>
  );

}

