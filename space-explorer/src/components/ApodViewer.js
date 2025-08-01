import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ApodViewer.css'

export default function ApodViewer() {
  const [apod, setApod] = useState(null);
  const [date, setDate] = useState('');
  const [favorites, setFavorites] = useState(() => JSON.parse(localStorage.getItem('favorites')) || []);

  useEffect(() => {
    const fetchApod = async () => {
      try {
        const res = await axios.get('https://api.nasa.gov/planetary/apod?api_key=83A0rTlxLca0hSbZLJZX4U4B6nbhncXMqf1p6y1s');
        setApod(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (date) fetchApod();
  }, [date]);

  const addToFavorites = () => {
    if (apod) {
      const updated = [...favorites, apod];
      setFavorites(updated);
      localStorage.setItem('favorites', JSON.stringify(updated));
    }
  };

  return (
    <div className='apod-section' >
      <h2 className='apod-card h2'>NASA APOD</h2>
      <input type="date" onChange={(e) => setDate(e.target.value)} className='date-picker'/>
      {apod && (
        <div className='apod-card'>
          <h3>{apod.title}</h3>
          <img src={apod.url} alt={apod.title}  className='apod-image'/>
          <p className='apod-card p'>{apod.explanation}</p>
          <button onClick={addToFavorites}>Add to Favorites</button>
        </div>
      )}
    </div>
  );
}