import React from 'react';
import CardComponents from './CardComponents';
import {shallow} from 'enzyme';
import AppData from '../App/AppData';
import App from '../App/App.jsx'


describe('CardComponents', () => {
  let cardComponents, app ;
  beforeEach(() => {
    app = shallow(<App/>)
    cardComponents = shallow(<CardComponents
      group={[AppData.filteredPlanets()]}
      addFavorite={'Nathan'}
      crawl={{title:'Nathan', opening_crawl:'Nathan', release_date:'Nathan'}}
    />)
  })

  it('cardComponents to render in order', () => {
    expect(cardComponents).toMatchSnapshot()
  })


  // it('cards should return an array of arrays of cards', () => {
  //   expect(cardComponents).toEqual([])
  // })

})