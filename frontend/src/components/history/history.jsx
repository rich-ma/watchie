import React from "react";
import { Link, withRouter } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


class History extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) { }

    historyList () {
       let history = this.props.locations.map()
    }

    render() {
        if (this.props.locations.length === 0) return null;

        return (
            <div className="history">
                <h1>This is the history page</h1>
                <br />
                <div className="history-list">
                    <List component="nav">
                        <Divider />
                        {this.props.locations.map(location => (
                          <div>
                            <ListItem button>
                                <ListItemText primary={location.name} />
                            </ListItem>
                            <Divider />
                          </div>
                        ))}
                    </List>
                </div>
            </div>
        );
    }
}

export default withRouter(History);