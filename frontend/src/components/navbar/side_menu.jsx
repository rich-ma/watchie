import React from 'react';
import { Link } from 'react-router-dom';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/DashboardRounded';
import MapIcon from '@material-ui/icons/Map';
import HistoryIcon from '@material-ui/icons/History';
import { withStyles } from '@material-ui/core/styles'

class SideMenu extends React.Component {

  render() {
    return (
      <div>
        <List component="nav">
          <Link to="/dashboard"
            className={this.props.classes.link} >
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link to="/map"
            className={this.props.classes.link} >
            <ListItem button>
              <ListItemIcon>
                <MapIcon />
              </ListItemIcon>
              <ListItemText primary="Map" />
            </ListItem>
          </Link>
          <Link to="/history"
            className={this.props.classes.link} >
            <ListItem button>
              <ListItemIcon>
                <HistoryIcon />
              </ListItemIcon>
              <ListItemText primary="History" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </div>
    );
  }
}

const styles = {
  link: {
    "text-decoration": "none"
  }
};

export default withStyles(styles)(SideMenu);