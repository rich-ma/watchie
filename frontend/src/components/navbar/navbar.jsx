import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { List, Button } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';

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
        <List><SideMenu logout={this.props.logout}/></List>
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

    const navMenu = (
      <ul className={this.props.classes.menu}>
        <Link to="/dashboard" className={this.props.classes.link}>
          <Button className={this.props.classes.button}>Dashboard</Button>
        </Link>
        <Link to="/map" className={this.props.classes.link}>
          <Button className={this.props.classes.button}>Map</Button>
        </Link>
        <Link to="/history" className={this.props.classes.link}>
          <Button className={this.props.classes.button}>History</Button>
        </Link>
      </ul>
    );
    return (
      <div>
        <AppBar position="static" className={this.props.classes.container}>
          <Toolbar className={this.props.classes.toolbar} >
            <Typography variant="title" color="inherit">
            <p className={this.props.classes.title}>
            {this.props.location.pathname.slice(1)}
            </p>
            </Typography>
            {navMenu}
            <IconButton className={this.props.classes.hamburger} color="inherit" aria-label="Menu" >
              <MenuIcon onClick={() => this.toggleDrawer('right', true)}/>
            </IconButton>
          </Toolbar>
        </AppBar>
        {menu}
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    "max-height": "56px",
    "position": "fixed",
    "width": "100%"
  },
  title: {
    "text-transform": "capitalize",
    "display": "block",
    [theme.breakpoints.up('sm')]: {
      "display": "none"
    }
  },
  toolbar: {
    "display": "flex",
    "justify-content": "space-between",
    [theme.breakpoints.up('sm')]: {
      "justify-content": "flex-start"
    }
  },
  hamburger: {
    "display": "block",
    [theme.breakpoints.up('sm')]: {
      "display": "none"
    }
  },
  menu: {
    "list-style": "none",
    "display": "none",
    [theme.breakpoints.up('sm')]: {
      "display": "flex"
    }
  },
  link: {
    "text-decoration": "none",
  },
  button: {
    "color": "white"
  }
});

export default withStyles(styles)(Navbar);