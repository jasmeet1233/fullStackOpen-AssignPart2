import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Components/Note";

const App = () => {
  let [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("new note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((response) => {
      setNotes(response.data);
    });
  }, []);

  const addNote = (e) => {
    e.preventDefault();
    console.log("clicked", e.target);
    const noteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      date: new Date(),
    };

    axios.post("http://localhost:3001/notes", noteObj).then((response) => {
      setNotes(notes.concat(response.data));
      setNewNote("");
    });
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);
  console.log(notesToShow);

  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`;
    const note = notes.find((n) => n.id === id);
    const changednote = {...note, important : !note.important};
    axios.put(url, changednote).then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response.data))
    })
  };

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
          <Note
            key={noteObj.id}
            noteObj={noteObj}
            toggleImportance={() => toggleImportanceOf(noteObj.id)}
          />
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
