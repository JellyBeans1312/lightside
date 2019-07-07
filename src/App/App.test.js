import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Call from '../Fetch/FetchCall'
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

  it('getCrawl should setState', () => {
    expect(wrapper.state('film')).toEqual({title:'', opening_crawl:'', release_date:''})
    wrapper.instance().setCrawl({title:'Nathan', opening_crawl:'Nathan', release_date:'Nathan'})
    expect(wrapper.state('film')).toEqual({title:'Nathan', opening_crawl:'Nathan', release_date:'Nathan'})
  })

  



})
