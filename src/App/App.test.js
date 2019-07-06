import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';


describe('App', () => {
  let wrapper;
  let mockData = [1,1,1,1,1,1,false]
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should render all components in order', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should add and delete from favorite state', () => {
    expect(wrapper.state('allFavorites').length).toEqual(0)
    wrapper.instance().handleFavorite(mockData)
    expect(wrapper.state('allFavorites').length).toEqual(1)
    wrapper.instance().handleFavorite(mockData)
    expect(wrapper.state('allFavorites').length).toEqual(0)
  })

  it('fetches with the correct link', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockData)
    }))
    const url = 'https://swapi.co/api/people/'
    wrapper.instance().getPeople()
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('sets the correct state after the fetch finishes', () => {
    const people = {results: [{
      "birth_year": "19BBY",
      "gender": "Male",
      "eye_color": "blue",
      "height": "172",
      "name": "Luke Skywalker",
      "created": "2014-12-09T13:50:51.644000Z"},
    {
      "birth_year": "112BBY",
      "created": "2014-12-10T15:10:51.357000Z",
      "eye_color": "yellow",
      "gender": "n/a",
      "height": "167",
      "name": "C-3PO"
    }]}
    // const expected = [people]
    window.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(people)
    }))
    // console.log('STATE 1 ', wrapper.state('people'))
    console.log(wrapper.instance().getPeople())
    wrapper.instance().getPeople()
    // .then((res) => console.log(res))
    .then(() => {
      expect(wrapper.state('people').length).toEqual(2)
    })
    // console.log('STATE 2 ', wrapper.state())


  })

  // it('a fetch error is handled correctly', () => {

  // })





})
