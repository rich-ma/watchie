import React from 'react';
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

class SideMenu extends React.Component {

  render() {
    return (
      <div>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText primary="History" />
          </ListItem>
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

export default SideMenu;