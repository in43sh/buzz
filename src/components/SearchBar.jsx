import React from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <Link to="/doors">
        <div className="search-bar-container__tag-item">
          <span>Doors</span>
        </div>
      </Link>
      <Link to="/furniture">
        <div className="search-bar-container__tag-item">
          <span>Furniture</span>
        </div>
      </Link>
      <Link to="/decor">
        <div className="search-bar-container__tag-item">
          <span>Decor</span>
        </div>
      </Link>
      <Link to="/paint">
        <div className="search-bar-container__tag-item">
          <span>Paint & Building materials</span>
        </div>
      </Link>
      <Link to="/lawn">
        <div className="search-bar-container__tag-item">
          <span>Lawn</span>
        </div>
      </Link>
      <Link to="/fans">
        <div className="search-bar-container__tag-item">
          <span>Ceiling Fans</span>
        </div>
      </Link>
      <Link to="/gardening">
        <div className="search-bar-container__tag-item">
          <span>Garden</span>
        </div>
      </Link>
      <Link to="/bath">
        <div className="search-bar-container__tag-item">
          <span>Bath & Faucets</span>
        </div>
      </Link>
      <input className="search-bar-container__search-bar" placeholder="Search" />
    </div>
  );
}

export default SearchBar;
