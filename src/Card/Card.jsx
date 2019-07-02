import React from 'react';
import './Card.scss'

const Card = ({person}) => {
  console.log(person)
  return (
    <article>
      <p>{person.name}</p>
      <p>{person.hair_color}</p>
      <p>{person.gender}</p>
      <p>{person.birth_year}</p>
      <p>{person.height}</p>
      <button>🌟</button>
    </article>
  )
}

export default Card;