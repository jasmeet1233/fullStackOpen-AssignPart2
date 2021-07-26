import React, { useState } from "react";
import Note from "./Components/Note";

const App = ({notes}) => {
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((noteObj) => 
          <Note key = {noteObj.id} noteObj = {noteObj}/>
        )}
      </ul>
    </div>
  );
};

export default App;
