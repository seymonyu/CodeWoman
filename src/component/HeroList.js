import React from "react";
import "./scss/Compare.scss";

const HeroList = ({ onClick, obj }) => {
  const SelectedOb = () => {
    onClick(obj);
  };

  return (
    <section className="container_avatar">
      <ul>
        <li>
          <img
            src={obj.image.url}
            onClick={SelectedOb}
            alt="avatar"
            className="imgItem"
          />
        </li>
      </ul>
    </section>
  );
};

export default HeroList;
