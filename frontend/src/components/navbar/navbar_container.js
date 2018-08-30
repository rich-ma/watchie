import { connect } from 'react-redux';
import Navbar from './navbar';
import { logoutUser } from '../../util/session_api_util';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);