import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArchiveIcon from '@mui/icons-material/Archive';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

function Notes({ notes, onAddNote, onArchive, onTrash, search, isOpen, darkMode, hoveringSidebar , isListView }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [key, setKey] = useState(0);
  let menuRef = useRef();
  const masonaryRef = useRef(null);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [isOpen]);

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleAddNote = () => {
    if (noteTitle || noteContent) {
      onAddNote({
        id: Math.random(),
        title: noteTitle,
        content: noteContent,
      });
      setNoteTitle('');
      setNoteContent('');
      setIsExpanded(false);
    }
  };

  const columns = {
    xs: isOpen ? 1 : 1,
    sm: isOpen ? 1 : 2,
    md: isOpen ? 2 : 3,
    lg: isOpen ? 3 : 4,
    xl: isOpen ? 4 : 5,
  };

  return (
    <div className={`notes-section ${darkMode ? 'dark' : ''} ${isOpen ? 'isOpen' : ''}`}>
      <div
        ref={menuRef}
        className={`note-input ${isExpanded ? 'expanded' : ''} ${darkMode ? 'dark' : ''}`}
        onClick={() => setIsExpanded(true)}
      >
        {isExpanded && (
          <input
            type="text"
            placeholder="Title"
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="note-title"
          />
        )}
        <textarea
          placeholder="Take a note..."
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          className="note-content"
          onClick={() => setIsExpanded(true)}
        />
        {isExpanded && (
          <div className="note-actions">
            <button onClick={handleAddNote} className='Add-button'>Add</button>
          </div>
        )}
      </div>
      
      <div className={`display-notes ${isOpen ? 'move-left' : ''}`} >
        {notes.length === 0 ? (
          <p className="empty-trash">
            <LightbulbOutlinedIcon style={{ fontSize: '400px', height: "180px", color: 'LightGrey', position: "relative", left: "-60px" }} className="trash-icon" />
            <br />Notes you add appear here
          </p>
        ) : (
          isListView ? ( // Check if list view is enabled
            <div className="list-view">
              {notes.filter((note) => {
                return search.toLowerCase() === ''
                  ? note
                  : (note.title && note.title.toLowerCase().includes(search)) ||
                    (note.content && note.content.toLowerCase().includes(search));
              }).map((note) => (
                <div key={note.id} className="note-list-item">
                  <h4 className="display-notes-content">  {note.title}</h4>
                  <p className="display-notes-content">  {note.content}</p>
                  <div className="options">
                    <button onClick={() => onArchive(note.id)} title='Archive' className='option-button'><ArchiveIcon sx={{ position: 'relative', left: '-3px', top: '2px' }} /></button>
                    <button onClick={() => onTrash(note.id)} title='Trash' className='option-button'><DeleteOutlineIcon sx={{ position: 'relative', left: '-3px', top: '2px' }} /></button>
                  </div>
                </div>
              ))}
            </div>
          ):(
          <Box className="note-box" ref={masonaryRef} sx={{ padding: '20px' , width: { xs: '400px', sm: '580px', md: '800px', lg: '1000px', xl: '1200px' } }}>
            <Masonry className='note-masonary' columns={columns} spacing={2}>
              {notes.filter((note) => {
                return search.toLowerCase() === ''
                  ? note
                  : (note.title && note.title.toLowerCase().includes(search)) ||
                    (note.content && note.content.toLowerCase().includes(search));
              }).map((note) => (
                <div className="note" key={note.id} style={hoveringSidebar ? { pointerEvents: 'none' } : {}}>
                  <h4>{note.title}</h4>
                  <p>{note.content}</p>
                  <div className="options">
                    <button onClick={() => onArchive(note.id)} title='Archive' className='option-button'><ArchiveIcon sx={{ position: 'relative', left: '-3px', top: '2px' }} /></button>
                    <button onClick={() => onTrash(note.id)} title='Trash' className='option-button'><DeleteOutlineIcon sx={{ position: 'relative', left: '-3px', top: '2px' }} /></button>
                  </div>
                </div>
              ))}
            </Masonry>
          </Box>
          )
        )}
      </div>
    </div>
  );
}

export default Notes;

