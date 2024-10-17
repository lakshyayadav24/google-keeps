import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';


export default function AccountMenu( darkMode) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="account-layout">
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, position: 'relative', top: '-135px' , left:'140px'  }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, fontSize: '30px' }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        sx={{
          height: '800px',
          width: '500px',
          position: 'relative',
          top: '-740px',
          left: '-20px',
        }}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className={`account-profile ${darkMode ? 'dark' : ''}`}>
        <div className='ic'
          onClick={handleClose}
          
        >
          <AccountCircleRoundedIcon className='account-ic'  sx={{ color:'grey' , position:'relative' , top:'20px' , left:'-20px' , fontSize:'100px'}}/>
        </div>
        <h2 className='account-options' style={{ position: 'relative', left: '180px', top: '10px', width:'90px' }}>
          Hi,User !
        </h2>
        <div className='account-manage'
          onClick={handleClose}
         
        >
          Manage Your Google Account
        </div>
        <div
          className="account-container"
        >
          <div className='add-account'
            onClick={handleClose}
            sx={{
              width: '180px',
              height:'60px',
              position: 'relative',
              left: '17px',
              top: '26px',
              background: 'white',
              borderRadius: '30px 0 0 30px',

            }}
          >
            <AddIcon sx={{color:'blue' , marginLeft:'20px' ,  marginRight:'10px'}}/> Add account
          </div>
          <div className='add-accounts'
            onClick={handleClose}
            sx={{
              width: '180px',
              height:'60px',
              position: 'relative',
              left: '200px',
              top: '-34px',
              background: 'white',
              borderRadius: '0 30px 30px 0',
            }}
          >
            <LogoutRoundedIcon sx={{marginLeft:'20px' , marginRight:'10px'}}/>
            Logout
          </div>
        </div>
        <MenuItem className='account-options' onClick={handleClose} sx={{ position:'relative' , top:'100px' , display:'flex' , justifyContent:'center' }}>
          Privacy Policy . Terms of Service
        </MenuItem>
        </div>
      </Menu>
    </div>
  );
}

