import React from "react";
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { Button, ButtonLabel } from '../Components/Button.style';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function ModelDBItem({ name, definition }) {

  let navigate = useHistory();
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