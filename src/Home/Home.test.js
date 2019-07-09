import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let wrapper
  let mockCrawl;
  beforeEach(() => {
    mockCrawl= {
      title: 'hello',
      opening_crawl: 'hi',
      release_date: 239
    }
    wrapper = shallow(
      <Home 
        crawl={mockCrawl}
      />
    )
  });

  it('should match snapshots', () => {
     expect(wrapper).toMatchSnapshot()
  })
});