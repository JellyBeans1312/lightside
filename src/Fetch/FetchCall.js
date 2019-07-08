
const Call = {

   fetchCrawl(setCrawl) {
     console.log('fetching Crawl')
    const randomNumber = Math.floor(Math.random() * (6 - 0 + 1))
    return fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => setCrawl(data.results[randomNumber]) )
      .catch(err => console.log(err))
  },

  fetchPeople(cleanPeople) {
    console.log('fetching people')
     return fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => cleanPeople(data.results))
      .catch(err => console.log(err))
  },

  fetchPlanets(cleanPlanets) {
    console.log('fetching planets')
    return fetch('https://swapi.co/api/planets/')
     .then(response => response.json())
   // .then(data => console.log(data))
     .then(data => cleanPlanets(data.results))
     .catch(err => console.log(err))
  },

  fetchVehicles(cleanVehicles) {
    console.log('fetching vehicles')
    return fetch('https://swapi.co/api/vehicles/')
     .then(response => response.json())
   // .then(data => console.log(data))
     .then(data => cleanVehicles(data.results))
     .catch(err => console.log(err))
  }

}


export default Call;