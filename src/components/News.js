import React, { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('http://localhost:3001/news');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Berita Terkini</h2>
      <div className="row">
        {news.map((newsItem) => (
          <div key={newsItem.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={newsItem.image} className="card-img-top" alt={newsItem.title} />
              <div className="card-body">
                <h5 className="card-title">{newsItem.title}</h5>
                <p className="card-text">{newsItem.description}</p>
                <a href={newsItem.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Baca Selengkapnya</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
