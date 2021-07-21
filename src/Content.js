import React from "react";

const Content = (props) => {
  const data = props.parts;
  const p = 
    <>
      {data.map((partObj, index) => {
        return (
          <p key={index}>
            {partObj.name} {partObj.exercises}
          </p>
        );
      })}
    </>

  return p;
};

export default Content;




