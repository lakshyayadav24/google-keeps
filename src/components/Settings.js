import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SettingsIcon from '@mui/icons-material/Settings';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=''>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        style={{ position:'relative' , left:'85px' , top:'-82px'}}
      >
        <SettingsIcon style={{color:'grey' , fontSize:'30px'}}/>
      </Button>
      <div className='settings-container' >
      <Menu className='setting'
      sx={{position:'absolute' , left:'-50px' , top:'30px'}}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <div className='settings-btn-container'>
        <MenuItem className='settings-btn' onClick={handleClose}>Settings</MenuItem>
        <MenuItem className='settings-btn' onClick={handleToggle} >  {darkMode ? ' Disable dark mode': 'Enable dark mode'  }
        </MenuItem>
        <MenuItem className='settings-btn' onClick={handleClose}>Help</MenuItem>
        </div>
      </Menu>
      </div>
    </div>
  );
}

