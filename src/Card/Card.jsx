import React from 'react';
import './Card.scss'
import green from '../images/green.png'
import red from '../images/red.png'

const Card = ({props, addFavorite}) => {

  return (
    <article>
      <div>
        <p>{props[0]}</p>
        { 
          props[6] === false && <img src={red} className='unfavorite-btn' alt='stuff' onClick={() => addFavorite(props)}/>
        }
        {
          props[6] === true && <img src={green} className='favorite-btn' alt='stuff' onClick={() => addFavorite(props)}/>
        } 
      </div>
      <p>{props[1]}</p>
      <p>{props[2]}</p>
      <p>{props[3]}</p>
      <p>{props[4]}</p>
    </article>
  )
}

export default Card;