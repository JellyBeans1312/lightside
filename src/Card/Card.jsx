import React from 'react';
import './Card.scss'
import green from '../images/green-lightsaber.png'
import red from '../images/red-lightsabers.png'

const Card = ({props, addFavorite}) => {

  const favorite = (<img src={green} className='favorite-btn' alt='stuff' onClick={() => addFavorite(props)}/>)
  const unfavorite = (<img src={red} className='unfavorite-btn' alt='stuff' onClick={() => addFavorite(props)}/>)

  return (
    <article>
      <div>
        <p>{props[0]}</p>
          {props[6] === false && unfavorite}
          {props[6] === true && favorite} 
      </div>
      <p>{props[1]}</p>
      <p>{props[2]}</p>
      <p>{props[3]}</p>
      <p>{props[4]}</p>
    </article>
  )
}

export default Card;