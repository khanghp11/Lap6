import React from "react";

const Result = ({ score, onReplayQuiz }) => {
  return (
    <div>
      <h2 className="p-4" style={{
        color: "red"
      }}> Congratulations you have finished!</h2>
      <p>Your Score: {score}</p>
      <button className="btn-success mb-4 ml-4" onClick={onReplayQuiz}>Replay Quiz</button>
    </div>
  );
};

export default Result;
