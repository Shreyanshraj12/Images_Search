import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Birds() {
  const [photos, setPhotos] = useState([]);
  const url = 'https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20';

  // Fetch data once when the component mounts
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setPhotos(response.data.photos))
      .catch((error) => console.error('Error fetching photos:', error));
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <h1>Bird Photos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {photos.map((photo) => (
          // Each photo is wrapped with a Link to its details page
          <Link key={photo.id} to={`/Birds/${photo.id}`}>
            <img
              src={photo.url}
              alt={photo.title}
              style={{
                margin: '10px',
                width: '200px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Birds;
