import { connect } from 'react-redux';
import Navbar from './navbar';
import { logoutUser } from '../../actions/session_actions';
import { unregister } from '../../registerServiceWorker';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id),
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser()),
  unregister
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);