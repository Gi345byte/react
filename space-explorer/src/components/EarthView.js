import React, { useState } from 'react';
import axios from 'axios';
import './EarthView.css'

export default function EarthView() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const fetchImage = async () => {
    try {
      const res = await axios.get(`
        https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&date=${date}&dim=0.1&api_key=83A0rTlxLca0hSbZLJZX4U4B6nbhncXMqf1p6y1s`
      );
      setImageUrl(res.data?.url || res.data?.results?.[0]?.url || '');

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='earth-section'>
      <h2>Earth Satellite View</h2>
      <input type="text" placeholder="Latitude" onChange={(e) => setLat(e.target.value)} className='earth-section input'/>
      <input type="text" placeholder="Longitude" onChange={(e) => setLon(e.target.value)} className='earth-section input'/>
      <input type="date" onChange={(e) => setDate(e.target.value)} className='earth-section input'/>
      <button onClick={fetchImage} className='earth-section button'>Get Image</button>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Earth" className='earth-image' />
        </div>
      )}
    </div>
  );
}