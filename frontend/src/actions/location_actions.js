import * as locationAPIUTil from '../util/location_api_util';

export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION_ERRORS = 'RECEIVE_LOCATION_ERRORS';


export const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location
})

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations
})

export const receiveLocationErrors = errors => ({
  type: RECEIVE_LOCATION_ERRORS,
  errors
})

export const removeLocation = id => ({
  type: REMOVE_LOCATION,
  id
})


export const createLocation = location => dispatch => {
  locationAPIUTil.createLocation(location)
    .then(location => dispatch(receiveLocation(location)))
    .catch(err => dispatch(receiveLocationErrors(err)))
}

export const fetchLocation = id => dispatch => {
  locationAPIUTil.getLocation(id)
     .then(location => dispatch(receiveLocation(location)))
      .catch(err => dispatch(receiveLocationErrors(err)))
}

export const fetchLocation = () => dispatch => {
  locationAPIUTil.getLocations()
     .then(locations => dispatch(receiveLocations(locations)))
      .catch(err => dispatch(receiveLocationErrors(err)))
}

export const deleteLocation = id => dispatch => {
  locationAPIUTil.deleteLocation(id)
    .then(() => dispatch removeLocation(id))
    .
}

  