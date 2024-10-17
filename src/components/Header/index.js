import React , {useState} from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';
import { IconButton } from '@mui/material';
import AccountMenu from '../Account';
import BasicMenu from '../Settings';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';


function Header({ search, setSearch ,toggleSidebar , isOpen , darkMode , toggleView , isListView }) {

 

  return (
    <header className="header">
        <header style={headerStyle}>
       <button className="openbtn" onClick={toggleSidebar}>
        {isOpen ? ' ☰ ' : '☰ '}
      </button>
    </header>

    <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Google Keep Logo"
          className="header__logo"
        />
      <h1>Keep</h1>
      <div className='search-bar'>
        <SearchOutlinedIcon style={{position: 'relative' , left: '12px' , top:'11px' , fontSize:'30px'}}/>
      <input className={`search ${darkMode ? 'dark' : ''}`}
        value={search}
       onChange={(e) => setSearch(e.target.value)}
        placeholder='search ...'
        />   
          </div>
      
      <div className='profile-container'  >
      <IconButton className='prfile-icon' sx={{position:'relative' , top:'-8px' , left:'-10px'}} >
        <RefreshIcon className='prfile-icon' style={{fontSize:'30px'}} />
        </IconButton>
      <IconButton className='profile-icon' onClick={toggleView} sx={{position:'relative' , top:'-8px' , left:'-10px' }}> 
          {isListView ? <GridViewIcon style={{ fontSize: '35px', color: 'grey' }}/> : <ListIcon style={{ fontSize: '40px', color: 'grey' }} />}
        </IconButton>
        <BasicMenu className='prfile-icon' />
        <AccountMenu className='prfile-icon'/>
        </div>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  color: 'white',

};

export default Header;

