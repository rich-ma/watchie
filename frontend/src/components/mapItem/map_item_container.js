import {
  connect
} from 'react-redux';
import MapItem from './map_item';
import { createLocation } from '../../actions/location_actions';
import { createCategory } from '../../actions/category_actions';
import { createTime } from '../../actions/times_actions';

const mSTP = (state, ownProps) => ({
    locations: Object.values(state.entities.locations),
    currentUserId: state.session.id
});

const mDTP = dispatch => ({
  createLocation: location => dispatch(createLocation(location)),
  createCategory: category => dispatch(createCategory(category)),
  createTime: time => dispatch(createTime(time))
});

export default connect(mSTP, mDTP)(MapItem);