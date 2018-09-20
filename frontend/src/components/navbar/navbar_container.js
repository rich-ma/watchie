import { connect } from 'react-redux';
import Navbar from './navbar';
import { logoutUser } from '../../actions/session_actions';
import { unregister } from '../../registerServiceWorker';
import { fetchLocations } from '../../actions/location_actions';
import { fetchCategories } from '../../actions/category_actions';
import { fetchTimes } from '../../actions/times_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  unregister,
  fetchLocations: () => dispatch(fetchLocations()),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchTimes: () => dispatch(fetchTimes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);