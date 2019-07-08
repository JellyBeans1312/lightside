import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';


describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card 
      props={['mock', 'data', 'or', 'something', 'like', 'that', true]}
      addFavorite={jest.fn()} 
      id={3}
      />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should run addFavorite when clicked unfavorite', () => {
    const mockAddFavorite = jest.fn()
    const mockProps = ['mock', 'data', 'or', 'something', 'like', 'that', true]
    const wrapper = shallow(
      <Card 
        props={mockProps}
        addFavorite={mockAddFavorite}
        id={1}
      />
    )
    wrapper.find('.favorites').simulate('click')

    expect(mockAddFavorite).toBeCalledWith(mockProps)
  });

  it('should run addFavorite when clicked as favorite', () => {
    const mockAddFavorite = jest.fn()
    const mockProps = ['mock', 'data', 'or', 'something', 'like', 'that', false]
    const wrapper = shallow(
      <Card 
        props={mockProps}
        addFavorite={mockAddFavorite}
        id={1}
      />
    )
    wrapper.find('.favorites').simulate('click')

    expect(mockAddFavorite).toBeCalledWith(mockProps)
  });

  
});