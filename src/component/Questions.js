import React from "react";
import RandomQuestion from "./RandomQuestion";
import Result from "./Result";

const Questions = ({
  question,
  handleYes,
  handleNo,
  answered,
  handlerQUnmount,
   handlerGameFlow
}) => {
  return (
    <div className="Questions">
      <h1>hello</h1>

      <RandomQuestion
        question={question}
        handleYes={handleYes}
        handleNo={handleNo}
      />

      <div>
        {answered === 1 || answered === 2 ? <Result result={answered} /> : null}
      </div>
      <button onClick={answered===1?handlerGameFlow:handlerQUnmount}>close</button>
    </div>
  );
};

export default Questions;
