import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h1 className={props.character === "O" ? "redSign" : "blueSign"}>
        {props.character}
      </h1>
    </div>
  );
}

export default Card;