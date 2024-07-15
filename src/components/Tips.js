import React, { useEffect, useState } from 'react';

const Tips = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const response = await fetch('http://localhost:3001/tips');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTips(data);
    } catch (error) {
      console.error("Error fetching tips:", error);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center">Tips Penanggulangan Gempa Bumi</h2>
      <div className="row">
        {tips.map((tip) => (
          <div key={tip.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{tip.title}</h5>
                <p className="card-text">{tip.description.split('\n').map((line, index) => (
                  <span key={index}>
                    {line}
                    <br />
                  </span>
                ))}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
