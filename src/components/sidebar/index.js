import React , {  useState} from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './style.css'; 

const Sidebar = ({ isOpen ,  setActiveComponent , toggleSidebar , darkMode }) => {

  const handleButtonClick = (buttonId) => {
      
    setActiveComponent(buttonId);   

}


const handleToggleSidebar = () => {
  toggleSidebar(!isOpen);
}

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''} ${darkMode ? 'dark' : ''}`}
      >
     <div >
      <div role="button"  onClick={() => handleButtonClick("notes")}  className='component'  style={componentStyle} >
        <LightbulbOutlinedIcon className='side-icon ' sx={iconStyle} />  Notes </div>
      
      <div role="button"  onClick={() => handleButtonClick("archive")} className='component' style={componentStyle} >
     <ArchiveOutlinedIcon   className='side-icon ' sx={iconStyle} />  Archive</div>
      
    <div role="button"  onClick={() => handleButtonClick("trash")} className='component' style={componentStyle}>
      <DeleteOutlineOutlinedIcon className='side-icon ' sx={iconStyle} /> Trash</div>
    </div>
    </div>
  );

  
};

const componentStyle = {
  overflow: "hidden", width: "250px", cursor: "pointer", position: "relative", left: "-30px", marginTop: '20px', borderRadius: "0 40px 40px 0"
};

const iconStyle = {
  display: "inline", position: "relative", top: "5px", left: "30px", marginRight: "50px", width: '24', height: '24', borderRadius: "50%"
};

export default Sidebar;

