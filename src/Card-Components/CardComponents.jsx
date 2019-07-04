import React from 'react';
import Card from '../Card/Card.jsx'
import './CardComponents.scss'
import Home from '../Home/Home.jsx';
import loading from '../images/giphy.gif'
const CardComponents = ({group, addFavorite, crawl}) => {
  console.log(group)
  console.log(crawl)
  const page = window.location.href
  console.log(page)
  const cards = group.map(person => {
    return (<Card 
    props={person} 
    id={person[5]} 
    key={person[5]}
    addFavorite={addFavorite}
  />)})

  return (
    <section className='cardComponents'>
      {page === 'http://localhost:3000/' && crawl.title === '' && <img src={loading} alt='Loading gif'/>}
      {page === 'http://localhost:3000/' && <Home crawl={crawl}/>}
      {page !== 'http://localhost:3000/' && page !== 'http://localhost:3000/favorites' && group.length === 0 && <img src={loading} alt='Loading gif'/>}
      {group.length !== 0 && cards}
      {group.length === 0 && page === 'http://localhost:3000/favorites' 
        && <h2>You do not have any favorites</h2>
      }
    </section>
  )
}

export default CardComponents;