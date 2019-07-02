import React from 'react';
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'

const Opening = ({ film }) => {

  return (
    <Crawl
      title={film.title}
      text={film.opening_crawl}
    >
       <div>{film.release_date}</div>
    </Crawl>
  )
}

export default Opening;