
const Call = {

   fetchCrawl(setCrawl) {
    return fetch('https://swapi.co/api/films')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else { throw Error('Error')}
      })
  },

  fetchPeople(cleanPeople) {
     return fetch('https://swapi.co/api/people/')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else { throw Error('Error')}
      })
  },

  fetchPlanets(cleanPlanets) {
    return fetch('https://swapi.co/api/planets/')
     .then(response => {
      if (response.ok) {
        return response.json()
      } else { throw Error('Error')}
    })
  },

  fetchVehicles(cleanVehicles) {
    return fetch('https://swapi.co/api/vehicles/')
     .then(response => {
      if (response.ok) {
        return response.json()
      } else { throw Error('Error')}
    })
  }

}


export default Call;