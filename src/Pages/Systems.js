import React from "react";
import { SystemsList } from "../Helpers/SystemsData";
import SystemsItem from "../Components/SystemsItem";
import "../Styles/Systems.css";
import {useForm} from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';

import img1 from '../Assets/img1.png';

function Systems() {

  // const {register, handleSubmit} = useForm()
  // const onSubmit = (data) => {
  //   console.log(data)
  // }
  // let navigate = useHistory();
  // let {name} = useParams();

  const [card, setCard] = React.useState([])
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setCard(data.data.memes))
  }, [])

  return (
    <div className="system">
      <div className="systemsList">
        {card.map((systemsItem, key) => {
          return (
            <SystemsItem
              key={key}
              image={img1}
              name={systemsItem.name}
              definition={systemsItem.id}
            />
          );
        })}
      </div>
    </div>
 
  );
}

export default Systems;
