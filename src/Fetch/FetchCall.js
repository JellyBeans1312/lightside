
const Call = {




   fetchCrawl(getCrawl) {
     console.log('fetching Crawl')
    const randomNumber = Math.floor(Math.random() * (6 - 0 + 1))
    return fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => getCrawl(data.results[randomNumber]) )
      .catch(err => console.log(err))
  },

  fetchPeople(getPeople) {
    console.log('fetching people')
     return fetch('https://swapi.co/api/people/')
      .then(response => response.json())
    // .then(data => console.log(data))
      .then(data => getPeople(data.results))
      .catch(err => console.log(err))
  },

  fetchPlanets() {

  },

  fetchVehicles() {

  }

}


export default Call;