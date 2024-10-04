import React from "react";
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';


function Archive({ archivedNotes, onRestore, onTrash , search}) {
  return (
    <div className="archive-section">
      {archivedNotes.length === 0 ? (
        <p className="empty-archive" style={{position:'relative' , left:'500px' , top:"140px" }}><ArchiveOutlinedIcon  style={{  fontSize: '400px' , height:"180px"  , color:'LightGrey' , position:"relative" , left:"-100px" }}/> <br/>No notes in archive</p>
      ) : (
        <Box sx={{ width: 1200, minHeight: 253 }}>
        <Masonry columns={5} spacing={2}>
  
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
              <button onClick={() => onRestore(note.id)} className="option-button"><UnarchiveIcon/></button>
              <button onClick={() => onTrash(note.id)} className="option-button"><DeleteOutlineIcon/></button>
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
