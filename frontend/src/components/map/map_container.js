import { connect } from "react-redux";
import Map from "./map";
import { fetchLocations, createLocation } from './../../actions/location_actions';

const mapStateToProps = (state, ownProps) => ({
 locations: state.entities.locations
});

const mapDispatchToProps = dispatch => ({
  fetchLocations: () => dispatch(fetchLocations()),
  createLocation: location => dispatch(createLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);