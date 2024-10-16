import React from "react";
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';


function Archive({ archivedNotes, onRestore, onTrash , search , isOpen}) {

  const columns = {
    xs: isOpen ? 1 : 1,
    sm: isOpen ? 1 : 2,
    md: isOpen ? 2 : 3,
    lg: isOpen ? 3 : 4,
    xl: isOpen ? 4 : 5,
  };

  return (
    <div className={`archive-section ${isOpen ? 'move-left' : ''}`}>
      {archivedNotes.length === 0 ? (
        <p className="empty-archive" ><ArchiveOutlinedIcon  style={{  fontSize: '400px' , height:"180px"  , color:'LightGrey' , position:"relative" , left:"-100px" }}/> <br/>No notes in archive</p>
      ) : (
        <Box sx={{width:{xs:'400px' , sm:'580px' , md:'800px' , lg:'1000px' , xl:'1200px'}}}>
        <Masonry columns={columns} spacing={2}>
  
        {archivedNotes.filter((note) =>{
              return search.toLowerCase() === '' 
              ? note 
              : (note.title && note.title.toLowerCase().includes(search)) || 
              (note.content && note.content.toLowerCase().includes(search));
            } ).map((note) => (
          <div className="note" key={note.id}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <div className="options">
              <button onClick={() => onRestore(note.id)} className="option-button"><UnarchiveIcon sx={{position:'relative' , left:'-3px' , top:'2px'}}/></button>
              <button onClick={() => onTrash(note.id)} className="option-button"><DeleteOutlineIcon sx={{position:'relative' , left:'-2px' , top:'2px'}}/></button>
            </div>
          </div>
        ))}
        </Masonry>
        </Box>
      )}
    </div>
  );
}

export default Archive;

