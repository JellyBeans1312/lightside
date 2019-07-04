import React from 'react';
import './Nav.scss';

const Nav = () => {
  return (
    <nav>
      <h1>Light Side</h1>
      <div>
        <button>Favorites</button>
        <span></span>
      </div>
      <section>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </section>
    </nav>
  )
}

export default Nav;

