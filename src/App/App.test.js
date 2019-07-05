import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';


describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should render all components in order', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should add and delete from favorite state', () => {
    const favorite = [1,1,1,1,1,false]
    expect(wrapper.state('allFavorites').length).toEqual(0)
    wrapper.instance().handleFavorite(favorite)
    expect(wrapper.state('allFavorites').length).toEqual(1)
    wrapper.instance().handleFavorite(favorite)
    expect(wrapper.state('allFavorites').length).toEqual(0)
  })







})
