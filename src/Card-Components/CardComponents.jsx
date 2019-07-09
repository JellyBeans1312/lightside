import React from 'react';
import Card from '../Card/Card.jsx'
import './CardComponents.scss'
import Home from '../Home/Home.jsx';
import loading from '../images/giphy.gif'
const CardComponents = ({group, addFavorite, crawl}) => {

  const page = window.location.href
  const loadingIcon = (<img src={loading} alt='Loading gif' className='loading-gif'/>)

  const cards = group.map((person, i) => {

    return (<Card 
    props={person} 
    id={person[5]} 
    key={person[5] + i}
    addFavorite={addFavorite}
  />)})

  return (
    <section className='cardComponents'>

      {page === 'http://localhost:3000/' && crawl.title === '' && loadingIcon}

      {page === 'http://localhost:3000/' && crawl.title !== '' && <Home crawl={crawl} loadingIcon={loadingIcon}/>}

      {page !== 'http://localhost:3000/' 
        && page !== 'http://localhost:3000/favorites' 
        && group.length === 0 && loadingIcon
      }

      {group.length !== 0 && page !== 'http://localhost:3000/' && cards}

      {group.length === 0 && page === 'http://localhost:3000/favorites' 
        && <h2>You do not have any favorites</h2>
      }

    </section>
  )
}

export default CardComponents;