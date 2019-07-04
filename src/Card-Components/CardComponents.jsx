import React from 'react';
import Card from '../Card/Card.jsx'
import './CardComponents.scss'
import Home from '../Home/Home.jsx';
import loading from '../images/giphy.gif'

const CardComponents = ({group, addFavorite, page, crawl}) => {

  const cards = group.map(person => {
  console.log(crawl)
    return (<Card 
    props={person} 
    id={person[5]} 
    key={person[5]}
    addFavorite={addFavorite}
  />)})
  return (
    <section className='cardComponents'>
      {page === 'home' && crawl.title === '' && <img src={loading} alt='Loading gif'/>}
      {page === 'home' && <Home crawl={crawl}/>}
      {group.length !== 0 && cards}
      {group.length === 0 && page === 'favorites' 
        && <h2>You do not have any favorites</h2>
      }
    </section>
  )
}

export default CardComponents;