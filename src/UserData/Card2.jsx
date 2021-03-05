import React from "react";

function Card2({ eventName, eventCategory }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{eventName} </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          {eventCategory}
        </a>
      </div>
    </div>
  );
}

export default Card2;
