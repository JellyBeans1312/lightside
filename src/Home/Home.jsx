import React from 'react';
import './Home.scss';
import PropTypes from 'prop-types'

const Home = ({crawl}) => {
  return(
    <section className='home'>
      <div className="fade"></div>
      <section className="star-wars">
        <div className="crawl">
          <div className="title">
            <h1>{crawl.title}</h1>
          </div>
          <p>{crawl.opening_crawl}</p>
          <p>{crawl.release_date}</p>
        </div>
      </section>
    </section>
    
  )
}

Home.propTypes = {
  crawl: PropTypes.object
}

export default Home;