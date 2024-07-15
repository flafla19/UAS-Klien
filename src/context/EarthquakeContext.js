import React, { createContext, useState, useEffect } from 'react';

export const EarthquakeContext = createContext();

export const EarthquakeProvider = ({ children }) => {
  const [earthquakes, setEarthquakes] = useState([]);

  useEffect(() => {
    fetchEarthquakes();
  }, []);

  const fetchEarthquakes = async () => {
    console.log("Fetching Earthquakes...");
    try {
      const response = await fetch('http://localhost:3001/earthquakes');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Earthquakes data fetched:", data);
      setEarthquakes(data);
    } catch (error) {
      console.error("Error fetching earthquakes:", error);
    }
  };

  return (
    <EarthquakeContext.Provider value={{ earthquakes }}>
      {children}
    </EarthquakeContext.Provider>
  );
};
