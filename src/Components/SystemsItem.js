import React from "react";
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

function SystemsItem({ image, name, definition }) {

  let navigate = useHistory();
  return (
    <div className="systemsItem">
       <Link underline='none' component={RouterLink} 
       to={{pathname: "/configuration", state: {data: true}}}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h3> {name} </h3>
      <p> {definition} </p>
      {/*<button onClick={() => {navigate.push('/models')}}>Choose</button>*/}
      </Link>
    </div>
  );
}

export default SystemsItem;
