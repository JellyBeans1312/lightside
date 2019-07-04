import React from 'react';
import Card from '../Card/Card.jsx'
import './CardComponents.scss'

const CardComponents = ({group, addFavorite, page, isFavorite}) => {

  // console.log(group)
  const cards = group.map(person => {

    return (<Card 
    props={person} 
    id={person[5]} 
    key={person[5]}
    addFavorite={addFavorite}
    isFavorite={isFavorite}
  />)})
  return (
    <section>
      {group.length !== 0 && cards}
      {group.length === 0 && page === 'favorites' 
        && <h2>You do not have any favorites</h2>
      }
    </section>
  )
}

export default CardComponents;