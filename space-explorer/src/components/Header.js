import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <nav className="header">
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>APOD</NavLink>
      <NavLink to="/mars" className={({ isActive }) => isActive ? 'active' : ''}>Mars Photos</NavLink>
      <NavLink to="/earth" className={({ isActive }) => isActive ? 'active' : ''}>Earth View</NavLink>
      <NavLink to="/favorites" className={({ isActive }) => isActive ? 'active' : ''}>Favorites</NavLink>
    </nav>
  );
}
