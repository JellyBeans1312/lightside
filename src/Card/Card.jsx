import React from 'react';
import './Card.scss'
import green from '../images/green.png'
import red from '../images/red.png'
import PropTypes from 'prop-types'

const Card = ({props, addFavorite}) => {
  return (
    <article>
      <div>
        <p>{props[0]}</p>
        { 
          props[6] === false && <img src={red} className='unfavorite-btn favorites' alt='stuff' onClick={() => addFavorite(props)}/>
        }
        {
          props[6] === true && <img src={green} className='favorite-btn favorites' alt='stuff' onClick={() => addFavorite(props)}/>
        } 
      </div>
      <p>{props[1]}</p>
      <p>{props[2]}</p>
      <p>{props[3]}</p>
      <p>{props[4]}</p>
    </article>
  )
}

Card.propTypes = {
  addFavorite: PropTypes.func,
  props: PropTypes.array
}

export default Card;