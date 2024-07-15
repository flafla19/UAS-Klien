// src/components/RecentEarthquakes.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEarthquakes } from '../redux/earthquakeSlice';

const RecentEarthquakes = () => {
  const dispatch = useDispatch();
  const earthquakes = useSelector((state) => state.earthquakes.data);
  const earthquakeStatus = useSelector((state) => state.earthquakes.status);
  const error = useSelector((state) => state.earthquakes.error);

  useEffect(() => {
    if (earthquakeStatus === 'idle') {
      dispatch(fetchEarthquakes());
    }
  }, [earthquakeStatus, dispatch]);

  let content;

  if (earthquakeStatus === 'loading') {
    content = <div>Loading...</div>;
  } else if (earthquakeStatus === 'succeeded') {
    content = (
      <ul>
        {earthquakes.map((eq) => (
          <li key={eq.id}>
            {eq.location} - {eq.magnitude} SR
          </li>
        ))}
      </ul>
    );
  } else if (earthquakeStatus === 'failed') {
    content = <div>{error}</div>;
  }

  return (
    <div className="container mt-4">
      <h2>Gempa Terbaru</h2>
      {content}
    </div>
  );
};

export default RecentEarthquakes;
