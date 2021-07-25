import React, { useState } from "react";
import Button from "./Button.js";
import Display from "./Display.js";
import History from "./History.js";
import Statistics from "./Statistics.js";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const maxVotesNumber = Math.max(...votes);
  const mostVotesIndex = votes.indexOf(maxVotesNumber);

  const clickHandler = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const voteHandler = () => {
    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);
  };

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button clickHandler={clickHandler} text="Next Anectode" />
      <Button clickHandler={voteHandler} text="Vote" />
      <h1>Anectode with most Votes</h1>
      <p>
        {anecdotes[mostVotesIndex]} has {maxVotesNumber} votes
      </p>
    </div>
  );
};

export default App;
