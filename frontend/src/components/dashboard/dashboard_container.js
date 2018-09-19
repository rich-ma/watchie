import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { getCategories } from '../../reducers/selectors';

const mapStateToProps = (state, ownprops) => {
  return {
    categories: getCategories(state, state.session.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);