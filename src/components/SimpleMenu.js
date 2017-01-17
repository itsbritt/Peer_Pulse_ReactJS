import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import LogoutButton from './LogoutButton';
class SimpleMenu extends Component {
  render(){
    return(
      <div>
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <Link to="/home"><MenuItem primaryText="Home" /></Link>
      <Link to="/add"><MenuItem primaryText="Add Project" /></Link>
      <MenuItem>
        <LogoutButton/>
      </MenuItem>
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>
  </div>
    )
  }
}

export default SimpleMenu;
