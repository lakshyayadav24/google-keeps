import React , {  useState} from 'react';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import './style.css'; 

const Sidebar = ({ isOpen ,  setActiveComponent }) => {



  const handleButtonClick = (buttonId) => {
      
    setActiveComponent(buttonId);   

}

  
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div >
     
      <div role="button" 
     
      onClick={() => handleButtonClick("notes")}
      className='component'
      style={{ 
        
        
           overflow:"hidden" , 
       width:"250px"  , 
       cursor:"pointer" ,
        position:"relative" , 
        left:"-30px" , 
        marginTop:'-10px' , 
        borderRadius:"0 40px 40px 0"}}>
        <LightbulbOutlinedIcon 
        className='side-icon '
        sx={{  
          display:"inline" ,  
        position:"relative" , 
        top:"5px"  , 
        left:"30px" ,  
        marginRight:"50px" ,
        width: '24' , 
        height: '24' , 
        borderRadius:"50%" }}> 
         </LightbulbOutlinedIcon>
          Notes
          </div>
      <div role="button" 
     
     onClick={() => handleButtonClick("archive")}
     className='component'
     style={{  
         overflow:"hidden" , width:"250px"   , cursor:"pointer" , position:"relative" , left:"-30px" ,  borderRadius:"40px"}}>
        <ArchiveOutlinedIcon                      className='side-icon '

 
  sx={{ 
 display:"inline" ,  position:"relative" , top:"5px" , left:"30px", marginRight:"50px" ,width: '24' , height: '24' ,  borderRadius:'50%'}}></ArchiveOutlinedIcon>Archive</div>
       <div role="button" 
       onClick={() => handleButtonClick("trash")}

       className='component'
       style={{  
        overflow:"hidden" , width:"250px" ,  cursor:"pointer" , position:"relative" , left:"-30px" , borderRadius:"40px"}}><DeleteOutlineOutlinedIcon        
        className='side-icon '

        
       sx={{ display:"inline"  ,  position:"relative" , top:"5px" , left:"30px", marginRight:"50px" ,width: '24' , height: '24' ,  borderRadius:'50%'}}/>Trash</div>
    </div>
    </div>
  );

  
};

export default Sidebar;
