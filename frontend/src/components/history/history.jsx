import React from "react";
import { Link, withRouter } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

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
                        <Divider />
                    </List>

                </div>
            </div>
        );
    }
}

export default withRouter(History);