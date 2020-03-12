import React from "react";
const End = ({ myAllyUrl }) => {
  return (
    <div>
      {myAllyUrl ? (
        <div>
          <h2>Congrats!! You have collected allies! </h2>
          {myAllyUrl.map((item, index) => (
            <img
              className="question--allies"
              key={index}
              src={item}
              alt="my allies"
            />
          ))}{" "}
        </div>
      ) : (
        <h2>Better luck next time!! </h2>
      )}
    </div>
  );
};
export default End;
