import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Components/Note";

const App = () => {
  let [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("new note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect')
    axios.get("http://localhost:3001/notes")
    .then((response) => {
      console.log('promise fullfilled');
      setNotes(response.data)
    })
  }, [])
  console.log('render', notes.length, 'notes')

  const addNote = (e) => {
    e.preventDefault();
    console.log("clicked", e.target);
    const note = {
      id: notes.length + 1,
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date().toISOString,
    };

    setNotes(notes.concat(note));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  console.log(notesToShow);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          Show {showAll ? "Important" : "All"}
        </button>
      </div>
      <ul>
        {notes.map((noteObj) => (
          <Note key={noteObj.id} noteObj={noteObj} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
