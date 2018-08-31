import { connect } from "react-redux";
import History from "./history";
import { fetchLocations } from '../../actions/location_actions';

const mapStateToProps = (state, ownprops) => {
    return {
        locations: Object.values(state.entities.locations)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchLocations: () => dispatch(fetchLocations())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(History);