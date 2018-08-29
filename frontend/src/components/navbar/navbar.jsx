import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';

import SideMenu from './side_menu';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      right: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(side, open) {
    this.setState({
      [side]: open,
    });
  }

  render() {
    const sideList = (
      <div>
        <h1>fname</h1>
        <List><SideMenu /></List>
        <Divider />
        <List></List>
      </div>
    );

    const menu = (
      <Drawer anchor="right" open={this.state.right} onClose={() => this.toggleDrawer('right', false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => this.toggleDrawer('right', false)}
          onKeyDown={() => this.toggleDrawer('right', false)} >
          {sideList}
        </div>
      </Drawer>
    );

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              News
            </Typography>
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon onClick={() => this.toggleDrawer('right', true)}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        {menu}
      </div>
    );
  }
}

export default Navbar;
