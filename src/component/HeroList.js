import React from "react";

const HeroList = ({ onClick, obj }) => {
  const SelectedOb = () => {
    onClick(obj);
  };

  return (
    <div className="allies-all container">
      <div className="allies--wrapper row">
        <img
          src={obj.image.url}
          onClick={SelectedOb}
          alt="avatar"
          className="question--allies col-md-3"
        />
      </div>
    </div>
  );
};

export default HeroList;
