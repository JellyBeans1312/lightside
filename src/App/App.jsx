import React, { Component } from 'react';
import CardComponents from '../Card-Components/CardComponents';
import Nav from '../Nav/Nav'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      vehicles: [],
      planets: []
    }
  }
  componentDidMount = () => {
    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(data => this.setState({ people: data.results }))
      .catch(err => console.log(err))
    
    fetch('https://swapi.co/api/vehicles')
      .then(response => response.json())
      .then(data => this.setState({ vehicles: data.results }))
      .catch(err => console.log(err))
    
    fetch('https://swapi.co/api/planets')
      .then(response => response.json())
      .then(data => this.setState({ planets: data.results}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
      {console.log(this.state.people, this.state.vehicles, this.state.planets)}
        <Nav/>
        <CardComponents/>
      </div>
    );
  }
}

export default App;
