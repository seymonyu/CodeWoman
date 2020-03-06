import React from "react";

function GiveTheResult({ flag, handlerunmount }) {
  if (flag === 1) {
    return (
      <div>
        <h1> You won</h1>
        <button onClick={handlerunmount}>close</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1> You Lost</h1>
        <button onClick={handlerunmount}>close</button>
      </div>
    );
  }
}

export default GiveTheResult;
