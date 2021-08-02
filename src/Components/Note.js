import React from "react";

function Note({ noteObj, toggleImportance }) {

  const label = noteObj.important ? 'make not important' : 'make important'

  return <li>
    {noteObj.content} <button onClick = {toggleImportance}>{label}</button>
    </li>;
}

export default Note;