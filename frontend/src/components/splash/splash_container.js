import { connect } from 'react-redux';
import Splash from './splash';
import { loginUser } from '../../util/session_api_util';
import { fetchLocations } from '../../actions/location_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  fetchLocations: () => dispatch(fetchLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);