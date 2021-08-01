import React from "react";

function Note({ noteObj }) {
  return <li>{noteObj.content}</li>;
}

export default Note;