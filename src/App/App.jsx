import React, { Component } from 'react';
import CardComponents from '../Card-Components/CardComponents';
import Nav from '../Nav/Nav'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      films: [],
      people: [],
      vehicles: [],
      planets: []
    }
  }
  componentDidMount = () => {
    const randomNumber = Math.floor(Math.random() * (6 - 0 + 1))
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => this.setState({ films: data.results[randomNumber] }))
      .catch(err => console.log(err))

    // fetch('https://swapi.co/api/people/')
    //   .then(response => response.json())
    //   .then(data => this.setState({ people: data.results }))
    //   .catch(err => console.log(err))
    
    // fetch('https://swapi.co/api/vehicles')
    //   .then(response => response.json())
    //   .then(data => this.setState({ vehicles: data.results }))
    //   .catch(err => console.log(err))
    
    // fetch('https://swapi.co/api/planets')
    //   .then(response => response.json())
    //   .then(data => this.setState({ planets: data.results}))
    //   .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        {this.state.films.opening_crawl}
        {this.state.films.title}
        {this.state.films.release_date}
        <Nav />
        <CardComponents people={this.state.people} planets={this.state.planets} vehicles={this.state.vehicles}/>
      </div>
    );
  }
}



export default App;
