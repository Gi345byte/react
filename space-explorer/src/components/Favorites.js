import React from 'react';
import './Favorites.css'

export default function Favorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className='favorites-section'>
      <h2 className='favorite-card h3'>Your Favorites</h2>
      <div className='favorites-grid '>
        {favorites.map((item, index) => (
          <div className='favorite-card'>
            {item.url ? (
              <img src={item.url} alt="Favorite" className='favorite-card img' />
            ) : (
              <img src={item.img_src} alt="Mars" className='favorite-card img' />
            )}
            <p className='favorite-card p'>{item.title || item.earth_date || 'Mars Photo'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}