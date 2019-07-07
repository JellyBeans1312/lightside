import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Call from '../Fetch/FetchCall'
import {shallow} from 'enzyme';
import AppData from './AppData.js'


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

  it('showCrawl should set state', () => {
    wrapper.setState({film : ''})
    expect(wrapper.state('film')).toEqual('')
    wrapper.instance().showCrawl()
    expect(wrapper.state('film')).toEqual({title:'', opening_crawl:'', release_date:''})
  })

  it('showCrawl should call fetchCrawl', () => {
    const fetch = jest.spyOn(Call, 'fetchCrawl')
    expect(fetch).not.toHaveBeenCalled()
    wrapper.instance().showCrawl()
    expect(fetch).toHaveBeenCalled()
  })

  it('setCrawl should setState', () => {
    expect(wrapper.state('film')).toEqual({title:'', opening_crawl:'', release_date:''})
    wrapper.instance().setCrawl({title:'Nathan', opening_crawl:'Nathan', release_date:'Nathan'})
    expect(wrapper.state('film')).toEqual({title:'Nathan', opening_crawl:'Nathan', release_date:'Nathan'})
  })

  it('showPeople should call fetchPeople if people length is 0', () => {
    const fetch = jest.spyOn(Call, 'fetchPeople')
    wrapper.setState({people : [1]})
    expect(fetch).not.toHaveBeenCalled()
    wrapper.setState({people : []})
    wrapper.instance().showPeople()
    expect(fetch).toHaveBeenCalled()
  })

  it('cleanPeople should filter the returned fetch data', () => {
    expect(wrapper.instance().cleanPeople([AppData.unfilteredPeople()]))
      .toEqual([AppData.filteredPeople()])
  })

  it('setPeople should setState', () => {
    expect(wrapper.state('people')).toEqual([])
    wrapper.instance().setPeople([AppData.filteredPeople()])
    expect(wrapper.state('people')).toEqual([AppData.filteredPeople()])
  })

  it('showVehicles should call fetchVehicles if vehicle length is 0', () => {
    const fetch = jest.spyOn(Call, 'fetchVehicles')
    wrapper.setState({vehicles : [1]})
    expect(fetch).not.toHaveBeenCalled()
    wrapper.setState({vehicles : []})
    wrapper.instance().showVehicles()
    expect(fetch).toHaveBeenCalled()
  })


})
