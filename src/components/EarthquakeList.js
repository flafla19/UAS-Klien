import React from 'react';

const EarthquakeList = ({ earthquakes }) => {
  return (
    <ul className="list-group">
      {earthquakes.map((quake) => (
        <li key={quake.id} className="list-group-item">
          <h5>{quake.title}</h5>
          <p>Magnitude: {quake.magnitude}</p>
          <p>Location: {quake.location}</p>
          <p>Date: {quake.date}</p>
        </li>
      ))}
    </ul>
  );
};

export default EarthquakeList;
