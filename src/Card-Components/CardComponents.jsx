import React from 'react';
import Card from '../Card/Card.jsx'
import './CardComponents.scss'

const CardComponents = ({group, addFavorite}) => {

  // console.log(group)
  const cards = group.map(person => {
    return (<Card 
    props={person} 
    id={person[5]} 
    key={person[5]}
    addFavorite={addFavorite}
  />)})
  return (
    <section>
      {cards}
    </section>
  )
}

export default CardComponents;