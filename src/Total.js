import React from "react";

const Total = (props) => {
  const exercisesObj = props.exercises
  console.log(exercisesObj);
  return (
    <p>
      Number of exercises{" "}
      {exercisesObj.reduce((acc, curr) => acc+curr.exercises,0)}
    </p>
  );
};

export default Total;

