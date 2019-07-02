import React from 'react';
import './Card.scss'

const Card = ({props, addFavorite, id}) => {
  // console.log(props)
  return (
    <article>
      <p>{props[0]}</p>
      <p>{props[1]}</p>
      <p>{props[2]}</p>
      <p>{props[3]}</p>
      <p>{props[4]}</p>
      <button onClick={() => addFavorite(props)}>X</button>
    </article>
  )
}

export default Card;