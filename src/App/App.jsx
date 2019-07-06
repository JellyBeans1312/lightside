import React, { Component } from 'react';
import CardComponents from '../Card-Components/CardComponents';
import './App.scss';
import {Route} from "react-router-dom";
import Nav from '../Nav/Nav.jsx'
import Call from '../Fetch/FetchCall'


class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {title:'', opening_crawl:'', release_date:''},
      people: [],
      vehicles: [],
      planets: [],
      allFavorites: [],
      isHidden: false
    }
  }
  
  componentDidMount = () => {
    // const randomNumber = Math.floor(Math.random() * (6 - 0 + 1))
    // fetch('https://swapi.co/api/films')
    //   .then(response => response.json())
    //   .then(data => this.setState({ film: data.results[randomNumber] }))
    //   .catch(err => console.log(err))

    if (window.location.href === 'http://localhost:3000/people') {
      this.showPeople()
    } else if (window.location.href === 'http://localhost:3000/planets') {
      this.getPlanets()
    } else if (window.location.href === 'http://localhost:3000/vehicles') {
      this.getVehicles()
    } else if (window.location.href === 'http://localhost:3000/') {
      Call.fetchCrawl(this.getCrawl)
    }
  }

  getCrawl = (crawl) => {
    console.log('getting crawl')
    this.setState({film: crawl})
  }

  showPeople = () => {
    if(this.state.people.length === 0) {
      Call.fetchPeople(this.getPeople)
    }
  }

  getPeople = (fetchData) => {
    console.log('getting people')
    let people = fetchData.map(person => {
      const info = [
            person.name, 
            `Birth Year: ${person.birth_year}`, 
            `Gender: ${person.gender}`, 
            `Height: ${person.height}`, 
            `Eye Color: ${person.eye_color}`, 
            person.created,
            false
          ]
          return info
    })
    this.setPeople(people)
    return people
    }

    setPeople = (people) => {
      this.setState({people: people})
    }

    getVehicles = () => {
      fetch('https://swapi.co/api/vehicles')
      .then(response => response.json())
      .then(data => this.setState({vehicles: data.results.map(vehicle => {
        const info = [
          vehicle.name,
          `Model: ${vehicle.model}`,
          `Class: ${vehicle.vehicle_class}`,
          `Passengers: ${vehicle.passengers}`,
          null,
          vehicle.created,
          false
        ]
        return info
      })}))
      .catch(err => console.log(err))
    }
    
    getPlanets = () => {
      fetch('https://swapi.co/api/planets')
      .then(response => response.json())
      .then(data => this.setState({planets: data.results.map(planet => {
        const info = [
          planet.name,
          `Terrain: ${planet.terrain}`,
          `Diameter: ${planet.diameter}`,
          `Population: ${planet.population}`,
          null,
          planet.created,
          false
        ]
        return info
      })}))
      .catch(err => console.log(err))
    }

  handleFavorite = (prop) => {
      const favorites = this.state.allFavorites;
      if(!favorites.includes(prop)) {
        prop[6] = !prop[6]
        this.setState({allFavorites: [...favorites ,prop]})
      } else {
        prop[6] = !prop[6]
        const unfavorite = favorites.filter(favorite => favorite !== prop)
        this.setState({allFavorites: unfavorite})
      }
  }

  render() {
    return (
      <main className="App">
        <Nav 
          getCrawl={() => this.getCrawl(this.state.film)}
          getPeople={this.showPeople} 
          getPlanets={this.getPlanets}
          getVehicles={this.getVehicles}
          allFavorites={this.state.allFavorites}
          />
        <Route 
          exact path='/' 
          component={() => <CardComponents 
            group={this.state.people} 
            addFavorite={this.handleFavorite}
            crawl={this.state.film}
          />}
        />
        <Route 
          exact path='/people' 
          component={() => <CardComponents 
            group={this.state.people} 
            addFavorite={this.handleFavorite}
          />}
        />
        <Route 
          exact path='/planets' 
          component={() => <CardComponents 
            group={this.state.planets}
            addFavorite={this.handleFavorite}
          />}
        />
        <Route 
          exact path='/vehicles' 
          component={() => <CardComponents 
            group={this.state.vehicles}
            addFavorite={this.handleFavorite}
          />}
        />
        <Route 
          exact path='/favorites' 
          component={() => <CardComponents 
            group={this.state.allFavorites}
            addFavorite={this.handleFavorite}
          />}
        />
      </main>
    );
  }
}



export default App;
