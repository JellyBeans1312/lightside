
const Call = {

   fetchCrawl() {
    return fetch('https://swapi.co/api/films')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else { throw Error('Error')}
      })
  },

  fetchPeople() {
     return fetch('https://swapi.co/api/people/')
      .then(response => {
        if (response.ok) {
          return response.json()
        } else { throw Error('Error')}
      })
  },

  fetchPlanets() {
    return fetch('https://swapi.co/api/planets/')
     .then(response => {
      if (response.ok) {
        return response.json()
      } else { throw Error('Error')}
    })
  },

  fetchVehicles() {
    return fetch('https://swapi.co/api/vehicles/')
     .then(response => {
      if (response.ok) {
        return response.json()
      } else { throw Error('Error')}
    })
  }
}


export default Call;