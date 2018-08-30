import { connect } from 'react-redux';
import Navbar from './navbar';
import { logoutUser } from '../../util/session_api_util';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);