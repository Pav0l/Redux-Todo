import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <NavLink exact to="/">Live</NavLink>
      <NavLink to="/done">Done</NavLink>
      <NavLink to="/archive">Archived</NavLink>
    </nav>
  );
}