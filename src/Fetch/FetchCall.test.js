
import Call from './FetchCall.js';
import React from 'react';
import {shallow} from 'enzyme';
import AppData from '../App/AppData.js'

describe('FetchCall', () => {
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
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
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({results: [film]})
    }))
    const result = await Call.fetchCrawl()
    expect(result.results).toEqual([film])
  })

  it('should throw error', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(Call.fetchCrawl()).rejects.toEqual(Error('Error'))
  })

  it('should fetch from people link', async () => {
    const url = 'https://swapi.co/api/people/'
    await Call.fetchPeople(mockFunc)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call cleanPeople with people', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(AppData.fetchedPeople())
    }))

    const result = await Call.fetchPeople()
    expect(result.results).toEqual([AppData.unfilteredPeople()])
  })

  it('should throw error', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(Call.fetchPeople()).rejects.toEqual(Error('Error'))
  })






  it('should fetch from planets link', async () => {
    const url = 'https://swapi.co/api/planets/'
    await Call.fetchPlanets(mockFunc)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call cleanPlanets with planets', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(AppData.fetchedPlanets())
    }))

    const result = await Call.fetchPlanets(mockFunc)
    expect(result.results).toEqual([AppData.unfilteredPlanets()])
  })

  it('should throw error', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(Call.fetchPlanets()).rejects.toEqual(Error('Error'))
  })





  it('should fetch from people link', async () => {
    const url = 'https://swapi.co/api/vehicles/'
    await Call.fetchVehicles(mockFunc)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  it('should call cleanVehicles with vehicles', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(AppData.fetchedVehicles())
    }))

    const result = await Call.fetchVehicles(mockFunc)
    expect(result.results).toEqual([AppData.unfilteredVehicles()])
  })

it('should throw error', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(Call.fetchVehicles()).rejects.toEqual(Error('Error'))
  })

})

