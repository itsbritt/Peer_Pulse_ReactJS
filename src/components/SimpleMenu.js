import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreHorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import { Link } from 'react-router';
import LogoutButton from './LogoutButton';
import AppBar from 'muicss/lib/react/appbar';

class SimpleMenu extends Component {
  render(){
    return(
      <AppBar>
        <div>
       <IconMenu
       iconButtonElement={<IconButton><MoreHorizIcon /></IconButton>}
       anchorOrigin={{horizontal: 'left', vertical: 'top'}}
       targetOrigin={{horizontal: 'left', vertical: 'top'}}
       >
       <div className='centeredContainer'>
       <Link to="/home"><MenuItem primaryText="Home" /></Link>
       <Link to="/add"><MenuItem className='menuButton' primaryText="Add Topic" /></Link>

       <LogoutButton>
       <MenuItem primaryText="Sign Out" style={{color: 'white', width: '90px', height: '10px', padding: '0'}}/>
       </LogoutButton>
       </div>
       </IconMenu>
       </div>
     </AppBar>
    )
  }
}

export default SimpleMenu;
