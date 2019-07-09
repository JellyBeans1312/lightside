import React from 'react';
import './Nav.scss';
import {NavLink, BrowserRouter as Router} from 'react-router-dom';


const Nav = ({getCrawl, getPeople, getPlanets, getVehicles, allFavorites}) => {
  return (
    <nav>
      <Router>
            <NavLink 
              to={'/'} 
              className='nav home' 
              onClick={getCrawl}
              > 
              <h1>LIGHT SIDE</h1>
            </NavLink>
          <section>
            <NavLink 
              to='/people' 
              className='nav link' 
              onClick={getPeople}
              > 
                <h2>PEOPLE</h2> 
            </NavLink>
            <NavLink 
              to='/planets' 
              className='nav link' 
              onClick={getPlanets}
              > 
                <h2>PLANETS</h2> 
            </NavLink>
            <NavLink 
              to='/vehicles' 
              className='nav link' 
              onClick={getVehicles}
              > 
                <h2>VEHICLES</h2> 
            </NavLink>
            <NavLink 
              to='/favorites' 
              className='nav link' 
              > 
                <h2>FAVORITES <span>{allFavorites.length}</span></h2>
            </NavLink>
          </section>
          </Router>
        </nav>
  )
}

export default Nav;

