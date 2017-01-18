import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import { Link } from 'react-router';
import LogoutButton from './LogoutButton';

class SimpleMenu extends Component {
  render(){
    return(
      <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <Link to="/home"><MenuItem primaryText="Home" /></Link>
      <Link to="/add"><MenuItem primaryText="Add Project" /></Link>
      <MenuItem />
      <MenuItem primaryText="Help" />
      <LogoutButton>
      <MenuItem primaryText="Sign out" />
    </LogoutButton>
    </IconMenu>
  </div>
    )
  }
}

export default SimpleMenu;
