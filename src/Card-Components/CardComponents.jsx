import React from 'react';
import Card from '../Card/Card.jsx'
import './CardComponents.scss'

const CardComponents = ({people}) => {

  
  const cards = people.map(person => <Card person={person} key={person.created}/>)
  return (
    <section>
      {cards}
    </section>
  )
}

export default CardComponents;