import React from "react";

function SystemsItem({ image, name, definition }) {
  return (
    <div className="systemsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <p> {definition} </p>
    </div>
  );
}

export default SystemsItem;
