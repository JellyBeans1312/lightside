import React from 'react';
import Card from '../Card/Card.jsx'
import './CardComponents.scss'

const CardComponents = ({group}) => {

  console.log(group)
  const cards = group.map(info => <Card person={info} key={info[5]}/>)
  return (
    <section>
      {cards}
    </section>
  )
}

export default CardComponents;