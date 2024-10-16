import React from "react";
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function Trash({ trashedNotes, onRestore, onDelete ,search , isOpen}) {

  const columns = {
    xs: isOpen ? 1 : 1,
    sm: isOpen ? 1 : 2,
    md: isOpen ? 2 : 3,
    lg: isOpen ? 3 : 4,
    xl: isOpen ? 4 : 5,
  };

  return (
    <div className={`trash-section ${isOpen ? 'move-left' : ''}`}>
      {trashedNotes.length === 0 ? (
        <p className="empty-trash" ><DeleteOutlinedIcon style={{ fontSize: '400px' , height:"180px"  , color:'LightGrey' , position:"relative" , left:"-100px" }} className="trash-icon"/> <br/> No notes in trash</p>
      ) : (
        <Box sx={{width:{xs:'400px' , sm:'580px' , md:'800px' , lg:'1000px' , xl:'1200px'}}}>
      <Masonry columns={columns} spacing={2}>
        {trashedNotes.filter((note) =>{
              return search.toLowerCase() === '' 
              ? note 
              : (note.title && note.title.toLowerCase().includes(search)) || 
              (note.content && note.content.toLowerCase().includes(search));
            } ).map((note) => (
          <div className="note" key={note.id}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <div className="options">
              <button onClick={() => onRestore(note.id)} title="Recover" className="option-button"><RestoreFromTrashIcon sx={{position:'relative' , left:'-2px' , top:'2px'}}/></button>
              <button onClick={() => onDelete(note.id)} title="Permanently Delete"  className="option-button"><DeleteForeverIcon sx={{position:'relative' , left:'-2px' , top:'2px'}}/></button>
            </div>
          </div>
        ))}
        </Masonry>
        </Box>
      )}
    </div>
  );
}

export default Trash;

