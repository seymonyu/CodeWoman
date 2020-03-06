import React from "react";

const Result = ({ result }) => {
  return (
    <div>
      <p>{result === 1 ? "correct" : "try again"}</p>
    </div>
  );
};

export default Result;
