import React from "react";

const RandomQuestion = ({ question, handleYes, handleNo }) => {
  const selectedYes = () => {
    handleYes(question);
  };

  const selectedNo = () => {
    handleNo(question);
  };

  return (
    <div>
      <p>{question.Q}</p>
      <button onClick={selectedYes}>Yes</button>
      <button onClick={selectedNo}>No</button>
    </div>
  );
};

export default RandomQuestion;
