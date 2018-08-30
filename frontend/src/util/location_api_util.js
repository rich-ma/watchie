import axios from 'axios';

export const createLocation = location => {
  return axios
    .post('/api/locations', location)
}

export const getLocation = id => {
  return axios
    .get(`/api/locations/${id}`)
}

export const getLocations = () => {
  return axios
    .get(`/api/locations`)
}

export const deleteLocation = id => {
  return axios
    .delete(`/api/locations/${id}`)
}