import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => (
  <div>
    <li>
      <Link to="/">Additions</Link>
    </li>
    <li>
      <Link to="/cats">Subtractions</Link>
    </li>
    <li>
      <Link to="/sheeps">Multiplications</Link>
    </li>
    <li>
      <Link to="/goats">Divisions</Link>
    </li>
  </div>
);
export default navbar;
