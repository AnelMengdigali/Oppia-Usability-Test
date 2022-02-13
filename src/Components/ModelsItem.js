import React from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function ModelDBItem({ name, definition }) {

  return (
    <div>
        <div className="modelDBItem">
            <h3> {name} </h3>
            <p> {definition} </p> 
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}></ToggleButtonGroup>
        </div>
    </div>
  );
}

export default ModelDBItem;