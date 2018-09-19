import {
  connect
} from 'react-redux';
import MapItem from './map_item';
import {
  fetchLocations,
  createLocation
} from '../../actions/location_actions';
import {
  createCategory
} from '../../actions/category_actions';

const mSTP = (state, ownProps) => ({
    locations: Object.values(state.entities.locations),
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations()),
  createLocation: location => dispatch(createLocation(location)),
  createCategory: category => dispatch(createCategory(category))
});



export default connect(mSTP, mDTP)(MapItem);