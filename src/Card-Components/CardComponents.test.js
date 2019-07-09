import React from 'react';
import CardComponents from './CardComponents';
import {shallow} from 'enzyme';
import AppData from '../App/AppData';
import App from '../App/App.jsx'


describe('CardComponents', () => {
  let cardComponents, url ;
  beforeEach(() => {
    // app = shallow(<App/>)
    cardComponents = shallow(<CardComponents
      group={[AppData.filteredPlanets()]}
      addFavorite={'Nathan'}
      crawl={{title:'Nathan', opening_crawl:'Nathan', release_date:'Nathan'}}
    />)
    global.window = Object.create(window);
    url = 'http://localhost:3000/';
    Object.defineProperty(window, 'location', {
      value: {
       href: url
      }
    });
  })

  it('cardComponents to render in order', () => {
    expect(cardComponents).toMatchSnapshot()
  })

  it('should render first loading icon', () => {
    cardComponents = shallow(<CardComponents
      group={[AppData.filteredPlanets()]}
      addFavorite={'Nathan'}
      crawl={{title:'', opening_crawl:'Nathan', release_date:'Nathan'}}
    />)
    expect(window.location.href).toEqual('http://localhost:3000/');
    expect(cardComponents).toMatchSnapshot()
  })

  it('should not render second loading icon', () => {
    global.window = Object.create(window);
    url = 'http://localhost:3000/favorites';
    Object.defineProperty(window, 'location', {
      value: {
       href: url
      }
    });
    cardComponents = shallow(<CardComponents
      group={[]}
      addFavorite={'Nathan'}
      crawl={{title:'Nathan', opening_crawl:'Nathan', release_date:'Nathan'}}
    />)
    expect(cardComponents).toMatchSnapshot()
  })

  // it('cards should return an array of arrays of cards', () => {
  //   expect(cardComponents).toEqual([])
  // })

})
