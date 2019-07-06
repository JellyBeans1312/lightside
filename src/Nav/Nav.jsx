import React from 'react';
import './Nav.scss';
import {NavLink} from 'react-router-dom';


const Nav = ({getPeople, getPlanets, getVehicles, allFavorites}) => {
  return (
    <nav>
            <NavLink 
              to={'/'} 
              className='nav home' 
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
        </nav>
  )
}

export default Nav;

