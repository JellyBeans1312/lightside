import React from 'react';
import './Card.scss'

const Card = ({info}) => {
  console.log(info)
  return (
    <article>
      <p>{info[0]}</p>
      <p>{info[1]}</p>
      <p>{info[2]}</p>
      <p>{info[3]}</p>
      <p>{info[4]}</p>
      <button>🌟</button>
    </article>
  )
}

export default Card;