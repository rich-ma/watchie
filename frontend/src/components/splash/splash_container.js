import { connect } from 'react-redux';
import Splash from './splash';
import { loginUser } from '../../util/session_api_util';
import { fetchLocations } from '../../actions/location_actions';
import { fetchCategories } from '../../actions/category_actions';
import { fetchTimes } from '../../actions/times_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  fetchLocations: () => dispatch(fetchLocations()),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchTimes: () => dispatch(fetchTimes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Splash);