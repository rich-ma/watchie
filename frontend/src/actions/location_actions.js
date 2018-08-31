import * as locationAPIUTil from '../util/location_api_util';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION_ERRORS = 'RECEIVE_LOCATION_ERRORS';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const CLEAR_LOCATION_ERRORS = 'CLEAR_LOCATION_ERRORS';

export const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location
})

export const receiveLocations = payload => ({
  type: RECEIVE_LOCATIONS,
  payload
})

export const receiveLocationErrors = errors => ({
  type: RECEIVE_LOCATION_ERRORS,
  errors
})

export const removeLocation = id => ({
  type: REMOVE_LOCATION,
  id
})

export const clearLocationErrors = () => ({
  type: CLEAR_LOCATION_ERRORS
})

export const createLocation = location => dispatch => {
  return locationAPIUTil.createLocation(location)
    .then(location => dispatch(receiveLocation(location)))
    .catch(err => dispatch(receiveLocationErrors(err.responseJSON)))
}

export const fetchLocation = id => dispatch => {
  return locationAPIUTil.getLocation(id)
     .then(location => dispatch(receiveLocation(location)))
      .catch(err => dispatch(receiveLocationErrors(err.responseJSON)))
}

export const fetchLocations = () => dispatch => {
  return locationAPIUTil.getLocations()
     .then(locations => dispatch(receiveLocations(locations)))
      .catch(err => dispatch(receiveLocationErrors(err.responseJSON)))
}

export const deleteLocation = id => dispatch => {
  return locationAPIUTil.deleteLocation(id)
    .then(() => dispatch(removeLocation(id)))
    .catch(err => dispatch(receiveLocationErrors(err.responseJSON)))
}

  