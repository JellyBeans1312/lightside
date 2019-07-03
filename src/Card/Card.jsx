import React from 'react';
import './Card.scss'

const Card = ({props, addFavorite, id}) => {
  // console.log(props)
  return (
    <article>
      <div>
        <p>{props[0]}</p>
        <button onClick={() => addFavorite(props)}>X</button>
      </div>
      <p>{props[1]}</p>
      <p>{props[2]}</p>
      <p>{props[3]}</p>
      <p>{props[4]}</p>
    </article>
  )
}

export default Card;