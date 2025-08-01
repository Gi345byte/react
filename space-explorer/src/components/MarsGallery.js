import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MarsGallery.css'

export default function MarsGallery() {
  const [photos, setPhotos] = useState([]);
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await axios.get(`
        https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=83A0rTlxLca0hSbZLJZX4U4B6nbhncXMqf1p6y1s`
      );
      setPhotos(res.data.photos);
    };
    fetchPhotos();
  }, []);

  const addToFavorites = (photo) => {
    const updated = [...favorites, photo];
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  return (
    <div className='mars-section'>
      <h2>Mars Rover Gallery</h2>
      <div className='mars-gallery'>
        {photos.slice(0, 10).map((photo) => (
          <div className='mars-card'>
            <img src={photo.img_src} alt="Mars" className='mars-card img' />
            <button onClick={() => addToFavorites(photo)}>Add to Favorites</button>
          </div>
        ))}
      </div>
    </div>
  );
}