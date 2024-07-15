import React, { useEffect, useState, useContext } from 'react';
import EarthquakeList from './EarthquakeList';
import { EarthquakeContext } from '../context/EarthquakeContext';

const Home = () => {
  const { earthquakes } = useContext(EarthquakeContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    console.log("Fetching news...");
    try {
      const response = await fetch('http://localhost:3001/history');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("News data fetched:", data);
      setNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  console.log("Current earthquakes:", earthquakes);
  console.log("Current news:", news);

  return (
    <div className="container my-4">
      <h1 className="text-center">Data Gempa Terkini di Semarang</h1>
      <EarthquakeList earthquakes={earthquakes} />

      <h2 className="mt-5">Sejarah Gempa</h2>
      <ul className="list-group">
        {news.map((article, index) => (
          <li key={index} className="list-group-item">
            <div className="d-flex align-items-center">
              <img src={article.image} alt={article.title} className="img-thumbnail mr-3" style={{ width: '150px', height: '150px' }} />
              <div>
                <h5>{article.title}</h5>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Baca Selengkapnya</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
