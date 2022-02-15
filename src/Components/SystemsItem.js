import React from "react";
import { useHistory } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

function SystemsItem(props) {

  // let navigate = useHistory();

  return (
    <div className="systemsItem">
      <Link underline='none' component={RouterLink} to={{pathname: "/configuration", state: {data: true}}}>
      {/* <h4>{badgeText}</h4> */}
      <div style={{ backgroundImage: `url(${props.image})` }}>
      {/* <h4>PUBLIC</h4>
        {props.type === "public" && <h4>PUBLIC</h4>}
        {props.type === "private" && <h4>PRIVATE</h4>} */}
      </div>
      <h3> {props.name} </h3>
      <p> {props.definition} </p>
      {/*<button onClick={() => {navigate.push('/models')}}>Choose</button>*/}
      </Link>
    </div>
  );
}

export default SystemsItem;
