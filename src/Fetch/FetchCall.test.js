
import Call from './FetchCall.js';
import React from 'react';
import {shallow} from 'enzyme';
import AppData from '../App/AppData.js'

describe('FetchCall', () => {
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve()
    }))
  })

  it('should fetch films', async () => {
    const url = 'https://swapi.co/api/films'
    await Call.fetchCrawl(mockFunc)
      expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call setCrawl with a crawl', async () => {
    const film = {title:'Nathan', opening_crawl:'Nathan', release_date:'Nathan'}
    await Call.fetchCrawl(mockFunc(film))
    expect(mockFunc).toHaveBeenCalledWith(film)
  })

  it('should fetch from people link', async () => {
    const url = 'https://swapi.co/api/people/'
    await Call.fetchPeople(mockFunc)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call cleanPeople with people', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(AppData.fetchedPeople())
    }))

    await Call.fetchPeople(mockFunc)
    expect(mockFunc).toHaveBeenCalledWith([AppData.unfilteredPeople()])
  })

  it('should fetch from people link', async () => {
    const url = 'https://swapi.co/api/planets/'
    await Call.fetchPlanets(mockFunc)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call cleanPlanets with planets', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(AppData.fetchedPlanets())
    }))

    await Call.fetchPlanets(mockFunc)
    expect(mockFunc).toHaveBeenCalledWith([AppData.unfilteredPlanets()])
  })

  it('should fetch from people link', async () => {
    const url = 'https://swapi.co/api/vehicles/'
    await Call.fetchVehicles(mockFunc)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call cleanVehicles with vehicles', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(AppData.fetchedVehicles())
    }))

    await Call.fetchVehicles(mockFunc)
    expect(mockFunc).toHaveBeenCalledWith([AppData.unfilteredVehicles()])
  })


  
})

// global.window = Object.create(window);
// const url = "http://dummy.com";
// Object.defineProperty(window, 'location', {
//   value: {
//     href: url
//   }
// });
// expect(window.location.href).toEqual(url);  