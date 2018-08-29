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

    componentDidMount() {

    }

    render() {
        return (
            <div className="history">
                <h1>This is the history page</h1>
                <br />
                <div className="history-list">
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="History Item 1" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary="History Item 2" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="History Item 3" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="History Item 4" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="History Item 1" />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <ListItemText primary="History Item 2" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="History Item 3" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemText primary="History Item 4" />
                    </ListItem>
                </List>
                </div>
            </div>
        );
    }
}

export default withRouter(History);