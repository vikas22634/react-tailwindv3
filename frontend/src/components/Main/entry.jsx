import React from "react";

function Entry(props) {
  return (
    <section className="row align-middle">
      <div className="column">
        <div className="cards">
          <img
            className="images"
            src={props.img}
            style={{ width: "100%" }}
            alt="Avatar"
          />
        </div>
        <h2 className="name">{props.name}</h2>
      </div>
    </section>
  );
}

export default Entry;
