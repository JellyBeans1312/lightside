const AppData = {

  fetchedPeople() {
    return({
      "count": 87, 
      "next": "https://swapi.co/api/people/?page=2", 
      "previous": null, 
      "results": [
          {
              "name": "Luke Skywalker", 
              "height": "172", 
              "mass": "77", 
              "hair_color": "blond", 
              "skin_color": "fair", 
              "eye_color": "blue", 
              "birth_year": "19BBY", 
              "gender": "male", 
              "homeworld": "https://swapi.co/api/planets/1/", 
              "films": [
                  "https://swapi.co/api/films/2/", 
                  "https://swapi.co/api/films/6/", 
                  "https://swapi.co/api/films/3/", 
                  "https://swapi.co/api/films/1/", 
                  "https://swapi.co/api/films/7/"
              ], 
              "species": [
                  "https://swapi.co/api/species/1/"
              ], 
              "vehicles": [
                  "https://swapi.co/api/vehicles/14/", 
                  "https://swapi.co/api/vehicles/30/"
              ], 
              "starships": [
                  "https://swapi.co/api/starships/12/", 
                  "https://swapi.co/api/starships/22/"
              ], 
              "created": "2014-12-09T13:50:51.644000Z", 
              "edited": "2014-12-20T21:17:56.891000Z", 
              "url": "https://swapi.co/api/people/1/"
          }]
        })
  },

  unfilteredPeople() {
    return {birth_year: "19BBY",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
    eye_color: "blue",
    films: ["https://swapi.co/api/films/2/", "https://swapi.co/api/films/6/", "https://swapi.co/api/films/3/", "https://swapi.co/api/films/1/", "https://swapi.co/api/films/7/"],
    gender: "male",
    hair_color: "blond",
    height: "172",
    homeworld: "https://swapi.co/api/planets/1/",
    mass: "77",
    name: "Luke Skywalker",
    skin_color: "fair",
    species: ["https://swapi.co/api/species/1/"],
    starships: ["https://swapi.co/api/starships/12/", "https://swapi.co/api/starships/22/"],
    url: "https://swapi.co/api/people/1/",
    vehicles: ["https://swapi.co/api/vehicles/14/", "https://swapi.co/api/vehicles/30/"]}
  },

  filteredPeople() {
    return ["Luke Skywalker", "Birth Year: 19BBY", "Gender: male", "Height: 172", "Eye Color: blue", "2014-12-09T13:50:51.644000Z", false]
  },

  fetchedPlanets() {
    return{
      "count": 61, 
      "next": "https://swapi.co/api/planets/?page=2", 
      "previous": null, 
      "results": [
          {
              "name": "Alderaan", 
              "rotation_period": "24", 
              "orbital_period": "364", 
              "diameter": "12500", 
              "climate": "temperate", 
              "gravity": "1 standard", 
              "terrain": "grasslands, mountains", 
              "surface_water": "40", 
              "population": "2000000000", 
              "residents": [
                  "https://swapi.co/api/people/5/", 
                  "https://swapi.co/api/people/68/", 
                  "https://swapi.co/api/people/81/"
              ], 
              "films": [
                  "https://swapi.co/api/films/6/", 
                  "https://swapi.co/api/films/1/"
              ], 
              "created": "2014-12-10T11:35:48.479000Z", 
              "edited": "2014-12-20T20:58:18.420000Z", 
              "url": "https://swapi.co/api/planets/2/"
          }]}
  },

  unfilteredPlanets() {
    return {climate: "temperate",
    created: "2014-12-10T11:35:48.479000Z",
    diameter: "12500",
    edited: "2014-12-20T20:58:18.420000Z",
    films: ["https://swapi.co/api/films/6/", "https://swapi.co/api/films/1/"],
    gravity: "1 standard",
    name: "Alderaan",
    orbital_period: "364",
    population: "2000000000",
    residents: ["https://swapi.co/api/people/5/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/81/"],
    rotation_period: "24",
    surface_water: "40",
    terrain: "grasslands, mountains",
    url: "https://swapi.co/api/planets/2/"}
  },

  filteredPlanets() {
    return ["Alderaan", "Terrain: grasslands, mountains", "Diameter: 12500", "Population: 2000000000", null, "2014-12-10T11:35:48.479000Z", false]
  },

  fetchedVehicles() {
    return {
      "count": 39, 
      "next": "https://swapi.co/api/vehicles/?page=2", 
      "previous": null, 
      "results": [
          {
              "name": "Sand Crawler", 
              "model": "Digger Crawler", 
              "manufacturer": "Corellia Mining Corporation", 
              "cost_in_credits": "150000", 
              "length": "36.8", 
              "max_atmosphering_speed": "30", 
              "crew": "46", 
              "passengers": "30", 
              "cargo_capacity": "50000", 
              "consumables": "2 months", 
              "vehicle_class": "wheeled", 
              "pilots": [], 
              "films": [
                  "https://swapi.co/api/films/5/", 
                  "https://swapi.co/api/films/1/"
              ], 
              "created": "2014-12-10T15:36:25.724000Z", 
              "edited": "2014-12-22T18:21:15.523587Z", 
              "url": "https://swapi.co/api/vehicles/4/"
          }]
    }
  },

  unfilteredVehicles() {
    return {cargo_capacity: "50000",
    consumables: "2 months",
    cost_in_credits: "150000",
    created: "2014-12-10T15:36:25.724000Z",
    crew: "46",
    edited: "2014-12-22T18:21:15.523587Z",
    films: ["https://swapi.co/api/films/5/", "https://swapi.co/api/films/1/"],
    length: "36.8",
    manufacturer: "Corellia Mining Corporation",
    max_atmosphering_speed: "30",
    model: "Digger Crawler",
    name: "Sand Crawler",
    passengers: "30",
    pilots: [],
    url: "https://swapi.co/api/vehicles/4/",
    vehicle_class: "wheeled"}
  },

  filteredVehicles() {
    return ["Sand Crawler", "Model: Digger Crawler", "Class: wheeled", "Passengers: 30", null, "2014-12-10T15:36:25.724000Z", false]
  }




}

export default AppData;