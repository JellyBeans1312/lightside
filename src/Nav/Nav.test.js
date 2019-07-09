import React from 'react';
import { shallow } from 'enzyme';
import Nav from './Nav';

describe('Nav', () => {
  let wrapper;
  let mockFavorites;
  beforeEach(() => {
    mockFavorites = ['hello','hi']
    wrapper = shallow(<Nav allFavorites={mockFavorites}/>)
  });
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  
});